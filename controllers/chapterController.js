const User = require('../models/User')
const Chapter = require('../models/Chapter')

const chapterController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('chapters')
            .then((user) => {
                res.send(user.chapters)
            })
    },
    show: (req, res) => {
        var chapterId = req.params.chapterId
        Chapter.findById(chapterId)
            .then((chapter) => {
                res.send(Chapter)
            })
    },
    delete: (req, res) => {
        var chapterId = req.params.chapterId
        Chapter.findByIdAndDelete(chapterId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var chapterId = req.params.chapterId
        Chapter.findByIdAndUpdate(chapterId, req.body, { new: true })
            .then((updatedChapter) => {
                updatedChapter.save()
                res.send(updatedChapter)
            })
    },
    create: (req, res) => {
        var userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                console.log(user)
                Chapter.create(req.body)
                    .then((newChapter) => {
                        console.log(newChapter)
                        user.Chapters.push(newChapter)
                        user.save()
                        res.send(newChapter)
                    })
            })
    }

}

module.exports = chapterController