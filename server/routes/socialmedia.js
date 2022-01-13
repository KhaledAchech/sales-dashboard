const express = require('express');
const router = express.Router();
const Social = require('../models/socialmedia');

//get all posts
router.get('/', async (req,res) => {
    try{
        const social = await Social.find()
        res.json(social);
    }catch(err){
        res.json({ message: err})
    }
});

//save post 
router.post('/', async (req,res) => {
   const social = new Social ({
        name: req.body.name,
        link: req.body.link,
        likes: req.body.likes,
        comments: req.body.comments,
        followerscount: req.body.followerscount
   });

   try{
        const savedsocial= await social.save();
         res.json(savedsocial)
   }catch(err){
        res.json({ message: err})
   }
  
});

//get one social 
router.get ('/:socialId', async (req, res) => {
    try{
        const social = await Social.findById(req.params.socialId)
         res.json(social)
    }catch(err){
        res.json({ message: err})
    }
   
});

//delete 
router.delete('/:socialId', async (req, res) => {
    try{
     const removedsocial = await Social.remove({_id : req.params.socialId})
     res.json(removedsocial)

    }catch(err){
        res.json({ message: err})
    }
});

//update 
router.patch('/:socialId', async (req, res) => {
    try{
        const updatedsocial = await Social.updateOne({_id : req.params.socialId}, 
            {$set: {link: req.body.link}});
            
        res.json(updatedsocial)

       }catch(err){
           res.json({ message: err})
       }
});

module.exports = router;
 