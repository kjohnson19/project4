const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    chapters: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Chapter'
        }
    ]
})

module.exports = mongoose.model('User', User)