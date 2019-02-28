const User = require('../models/User')
const Chapter = require('../models/Chapter')
const mongoose = require('./connections')

const chapter1 = new Chapter({
    author: "Kenya",
    chapter: 'Fly to Mars',
    text: "Earth isn't Red enough. Let's move to a new planet"
})

const chapter2 = new Chapter({
    author: "",
    chapter: 'Build a Car',
    text: "Gas is too expensive. I'm gonna build a car that doesn't need gas"
})

const michaelJackson = new User({
    username: 'michaelJackson',
    password: 'chickenNuggets',
    chapters: [chapter1, chapter2]
})

User.remove({})
    .then(() => Chapter.remove({}))
    .then(() => Chapter.insertMany([chapter1, chapter2]))
    .then(() => michaelJackson.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())