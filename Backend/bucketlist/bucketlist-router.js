const express = require('express');

const Bucketlists = require('./bucketlist-model.js');

const router = express.Router();


// /home
// Read - Obtain all posts

router.get('/', async(req, res) => {
    try {
      const posts = await Bucketlists.get();
      res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({
            message: 'Error retrieving the posts'
        })
    }
})


// /home/:id
// Obtain specific posts

router.get('/:id', validatePostId, (req, res) => {
    res.status(200).json(req.post);
});





// custom middleware

async function validatePostId(req, res, next) {
    try{
        const { id } = req.params;
        const post = await Bucketlists.getById(id);

        if(post) {
            req.post = post;
            next();
        } else {
            res.status(500).json({ message: 'Id not found!' })
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to process' })
    }
}


module.exports = router;