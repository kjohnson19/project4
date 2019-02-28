const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Chapter = new Schema({
    author: String,
    chapter: String,
    text: String
})

module.exports = mongoose.model('Chapter', Chapter)

