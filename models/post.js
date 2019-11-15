let mongoose = require('mongoose');
let Schema = mongoose.Schema

let postSchema = new Schema({
    id: String,
    title: String,
    date: Date,
    country: String,
    description: String,
    text: String,
    imageUrl: String    
});

let Post = mongoose.model('Post', postSchema);

module.exports = { Post }
