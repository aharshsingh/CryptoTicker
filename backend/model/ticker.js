const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tickerSchema = new Schema({
    base_unit: {type: String, required: true},
    last: {type: Number, required: true},
    volume: {type: Number, required: true},
    sell: {type: Number, required: true},
    buy: {type: Number, required: true},
    name: {type : String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('Ticker', tickerSchema, 'tickers');