import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },
    // kind: 'post' (regular) or 'listing' (item for sale)
    kind: {
      type: String,
      enum: ["post", "listing"],
      default: "post",
    },
    // optional listing details when kind === 'listing'
    listing: {
      name: { type: String },
      type: { type: String },
      price: { type: Number },
      description: { type: String },
      tags: { type: [String], default: [] },
    },
    media: {
      type: [String],
      default: [],
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
