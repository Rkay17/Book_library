//const indexPost = (req, res) => { res.send('helloo') }

const Post = require('../models/Post')

const storeBook = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(201).json({
            message: "Successfully created",
            "data" : post            
        })
    } catch (error) {
        console.log(error)
    }
}

const showBook = async(req, res) => {
    const id = req.params.id
    try {
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
    }
}

//UPDATE
const updateBook = async(req, res) => {
    const postBody = req.body
    const id  = req.params.id
    try {
        const post = await Post.findByIdAndUpdate(id, postBody)
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
    }
}

const deleteBook = async(req, res) => {
    const id = req.params.id
    try {
        const post = await Post.findByIdAndDelete(id)
        res.status(200).json({
            message: "Successfully Deleted"
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { storeBook, showBook, updateBook, deleteBook }



