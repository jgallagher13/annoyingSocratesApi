const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/posts')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, postsCtrl.create)
router.get('/:id', postsCtrl.find)
router.delete('/:id', ensureLoggedIn, postsCtrl.deletePost)

module.exports = router