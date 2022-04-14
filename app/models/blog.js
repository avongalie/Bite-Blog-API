const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  post: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)

//push to post array 