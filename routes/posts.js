const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/posts')

router.post('/', postsCtrl.create)
router.get('/:id', postsCtrl.find)
router.delete('/:id', postsCtrl.deletePost)

module.exports = router