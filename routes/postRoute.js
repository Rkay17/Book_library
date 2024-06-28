const express = require("express")
const router = express.Router()

router.get("/api/posts", (req, res) => { 
    res.send("This is a post route") })

    const postController = require('../controllers/postController')


   // router.get('/api/posts', postController.index)
    
    router.post('/api/posts', postController.storeBook)
    
    router.get('/api/posts/:id', postController.showBook)
    
    router.put('/api/posts/:id', postController.updateBook)
    
    router.delete('/api/posts/:id', postController.deleteBook)
    
    
    
    
    module.exports = router