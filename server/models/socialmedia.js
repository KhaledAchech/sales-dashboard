const mongoose = require ('mongoose')

const SocialSchema = mongoose.Schema({

    name : String,
    link : {
        type : String, 
        required: true
    },
    likes : Number,
    comments : String, 
    followerscount : Number, 
    
});

module.exports = mongoose.model('Social', SocialSchema);
