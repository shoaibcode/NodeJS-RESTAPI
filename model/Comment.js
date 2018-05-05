const mongoose = require("mongoose");

const comment_schema = new mongoose.Schema({
  content: {
    type: String,
    required: "Content is Required"
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: "Post is Required Field"
  }
});

module.exports = mongoose.model("Comment", comment_schema);
