const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const chapterController = require('../controllers/chapterController')

router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/chapter', chapterController.index)
router.get('/api/chapter/:chapterId', chapterController.show)
router.delete('/api/chapter/:chapterId', chapterController.delete)
router.patch('/api/chapter/:chapterId', chapterController.update)
router.post('/api/users/:userId/chapter', chapterController.create)

module.exports = router

 