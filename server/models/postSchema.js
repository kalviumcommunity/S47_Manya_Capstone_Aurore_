const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    imgpath: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Post = mongoose.model("usersdatas", postsSchema);

module.exports = Post;
