# Stock Market Dashboard

## Table of Contents
1. [Introduction](#introduction)
2. [Project Setup](#project-setup)
3. [API Integration](#api-integration)
4. [Components Overview](#components-overview)
5. [State Management](#state-management)
6. [Styling and Responsive Design](#styling-and-responsive-design)
7. [Bonus Feature: Stock Search Functionality](#bonus-feature-stock-search-functionality)
8. [Deployment](#deployment)
9. [Conclusion](#conclusion)

## Introduction
The Stock Market Dashboard is a React-based application that provides real-time market data in an intuitive and user-friendly manner. The dashboard includes market summaries, sector performance, market indices, and charts for selected market indices or ETFs. Additionally, it features a search functionality for retrieving historical data for specific stocks.

## Project Setup
**Prerequisites:**
- Node.js
- npm or yarn

**Setup Steps:**
1. Clone the repository:
   ```sh
   git clone https://github.com/AnshumohanAcharya/StockMarketDash

Navigate to the project directory:
```sh
cd stock-market-dashboard
```
Install dependencies:
```sh
npm install
```
Create a .env file in the root directory and add your server URL:
env
```sh
REACT_APP_SERVER_URL=your_server_url
```
Start the development server:
```sh
npm start
```
API Integration
The application uses the Yahoo Finance API to fetch real-time market data. (You need to set your headers in stockApi file.)


Header:

Displays a personalized greeting with the current date.
Includes a navigation bar with icons for Home, Search, and Profile.
Market Summary:

Displays current market conditions with a headline or news update.
Includes a sentiment indicator (e.g., "The markets are bullish").
Sector Performance:

Displays various market sectors with percentage changes. Positive changes are highlighted in green, and negative changes in red.
Markets Overview:

Lists key market indices (e.g., S&P 500, Nasdaq, Dow Jones) with their current value, daily change, and percentage change.
Includes additional assets like Crude Oil, Gold, Silver, and Bitcoin.
Chart Section:

Displays a line chart for a selected market index or ETF.
Allows the user to toggle between different time ranges (1D, 1W, 1M, 3M, 1Y, All).
State Management
The application uses React hooks (useState, useEffect) for state management. Custom hooks are utilized for fetching data from the API. The state is managed in a way that ensures the UI is responsive and up-to-date with real-time data.

Styling and Responsive Design
The application uses a combination of CSS and a UI library like Material-UI to ensure a clean and responsive design. The layout is designed to be accessible and performant across different devices and screen sizes.

Bonus Feature: Stock Search Functionality
The dashboard includes a search functionality that allows users to enter the stock code and retrieve historical data. This feature enhances the user experience by providing detailed insights into specific stocks.

Deployment
To deploy the application, follow these steps:

Build the application:
```sh
npm run build
```

Deploy the build directory to your preferred hosting service.
Conclusion
The Stock Market Dashboard is a robust and user-friendly application that provides real-time market insights. By integrating with the Yahoo Finance API and utilizing modern web development practices, the dashboard ensures an engaging and informative user experience.

For more detailed implementation instructions and code snippets, please refer to the source code in the repository.
