# Crypto Ticker Fetcher

This project is a Node.js Express server that fetches the top 10 cryptocurrency tickers from the WazirX API and stores specific data in a MongoDB database. It also provides an endpoint to retrieve the stored data.

## Features

- Fetch top 10 cryptocurrency tickers from WazirX API.
- Store ticker details (name, last, buy, sell, volume, base_unit) in MongoDB database.
- Provide an API endpoint to get the stored data.

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/crypto-ticker-fetcher.git
   cd crypto-ticker-fetcher
2. **Install dependencies:**
   ```bash
   npm install
  
3. **Set up MongoDB:**
   
   - Ensure MongoDB is installed and running.
   - Create a database named `crypto_ticker`.
   - Update the `DATABASE_URL` in the `.env` file with your MongoDB connection string.

## Database Schema

  Tickers Table:
  - id: Primary key
  - name: Ticker name
  - last: Last price
  - buy: Buy price
  - sell: Sell price
  - volume: 24-hour volume
  - base_unit: Base unit

## Deployment

### Render Deployment

You can access the deployed server on Render at the following URL:

[https://quadb-assignment-fullstack-application.onrender.com](https://quadb-assignment-fullstack-application.onrender.com)

### Netlify Deployment

You can access the deployed frontend on Netlify at the following URL:

[https://cryptoticker.netlify.app](https://cryptoticker.netlify.app)

