const Post = require('../models/post')

async function create(req, res, next) {
    try {
        const post = await Post.create(req.body)
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'something went wrong' })
    }
}

module.exports = {
    create
}