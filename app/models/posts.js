const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  image: {
    type: Image
  },
  comments: [commentSchema],
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
