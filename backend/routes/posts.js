const express = require("express");
const Post = require("../models/Post");
const multer = require("multer");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

// Create Post
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : ""
    });
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get Posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

module.exports = router;
