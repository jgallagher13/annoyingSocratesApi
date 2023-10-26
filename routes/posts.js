const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/posts')

router.post('/', postsCtrl.create)
router.get('/:id', postsCtrl.find)

module.exports = router