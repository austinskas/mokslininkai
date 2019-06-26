const mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  postID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

let CommentModel = mongoose.model('Comments', CommentSchema);

module.exports = CommentModel;
