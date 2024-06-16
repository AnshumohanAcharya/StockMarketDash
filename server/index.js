import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';

dotenv.config();

import session from "express-session";
import passport from "passport";
import OAuth2Strategy from "passport-google-oauth2";
import userdb from "./model/userSchema.js";

const clientid = process.env.CLIENT_ID
const clientsecret = process.env.CLIENT_SECRET

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use(cors({
  origin: process.env.REACT_APP_BASE_URL,
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret:process.env.SECRET_KEY,
  resave:false,
  saveUninitialized:true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
      clientID:clientid,
      clientSecret:clientsecret,
      callbackURL:"/auth/google/callback",
      scope:["profile","email"]
  },
  async(accessToken,refreshToken,profile,done)=>{
      try {
          let user = await userdb.findOne({googleId:profile.id});

          if(!user){
              user = new userdb({
                  googleId:profile.id,
                  displayName:profile.displayName,
                  email:profile.emails[0].value,
                  image:profile.photos[0].value
              });

              await user.save();
          }

          return done(null,user)
      } catch (error) {
          return done(error,null)
      }
  }
  )
)

passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((user,done)=>{
  done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
  successRedirect:`${process.env.REACT_APP_BASE_URL}/dashboard`,
  failureRedirect:`${process.env.REACT_APP_BASE_URL}/login`
}))

app.get("/login/sucess",async(req,res)=>{

  if(req.user){
      res.status(200).json({message:"User Login",user:req.user})
  }else{
      res.status(400).json({message:"Not Authorized"})
  }
})

app.get("/logout",(req,res,next)=>{
  req.logout(function(err){
      if(err){return next(err)}
      res.redirect(`${process.env.REACT_APP_BASE_URL}/login`);
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});