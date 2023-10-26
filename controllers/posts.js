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

async function find(req, res, next) {
    try {
        const posts = await Post.find({quoteId: req.params.id})
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'something went wrong' })
    }
}

async function deletePost(req, res, next) {
    try {
        const post = await Post.findById(req.params.id)
        await post.deleteOne()
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'something went wrong' })
    }
}


module.exports = {
    create,
    find,
    deletePost
}