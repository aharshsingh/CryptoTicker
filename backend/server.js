const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { APP_PORT, API_URL, DB_URL } = require('./config');
const axios = require('axios');
const Ticker = require('./model/ticker.js');

app.use(cors());

mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});

app.get('/toptickers', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data;
        // console.log(data);
        if (!data) {
            throw new Error('No data received from API');
        }
        const dataArray = Object.keys(data).map(key => ({
            base_unit: data[key].base_unit,
            last: parseFloat(data[key].last),
            volume: parseFloat(data[key].volume),
            sell: parseFloat(data[key].sell),
            buy: parseFloat(data[key].buy),
            name: data[key].name
        }));
        dataArray.sort((a, b) => b.last - a.last);
        const top10 = dataArray.slice(0, 10);
        //console.log(top10);

        try {
            await Ticker.insertMany(top10);
            console.log(`Saved top 10 entries to the database.`);
        } catch (error) {
            console.error(`Error saving to the database:`, error);
        }

        try {
            const latestEntries = await Ticker.find().sort({ updatedAt: -1 }).limit(10);
            res.json(latestEntries);
        } catch (error) {
            console.error('Error fetching latest entries:', error);
            res.status(500).json({ error: 'Error fetching latest entries' });
        }

    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).json({ error: 'Error fetching data from API' });
    }
});

app.listen(APP_PORT, () => {
    console.log(`App running on port ${APP_PORT}`);
});
