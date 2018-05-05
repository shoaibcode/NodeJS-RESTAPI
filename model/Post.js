const mongoose = require("mongoose");

const post_schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is Required"
    },
    content: {
      type: String,
      required: "Content is Required"
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: "Comment is Required"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", post_schema);
