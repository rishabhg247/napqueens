const express = require('express');
const app = express();
app.use(express.json());
const {Posts} = require('../database/mongooseInit')
const router = express.Router();

// API to get all the posts..
router.get("/api/posts", async (req, res) => {
  try {
    const posts = await Posts.find({});
    res.status(200).json(posts);
  }
  catch (err) {res.status(500).send(err)}
});

// API to get the post by ID...
router.get("/api/posts/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Posts.findById(postId);
    if (!post) {res.status(404).json({ error: "Post not found" })}
    else {res.status(200).json(post)}
  }
  catch (err) {res.status(500).send(err)}
});

// API to add a new post...
router.post("/api/posts", async (req, res) => {
  let {title,content,category_id}=req.body;
  if (!title || !content || !category_id) {
    return res.status(400).json({ error: "Title, content, and category_id are required fields." });
  }
    try {
      const newPost = new Posts({title,content,category_id});
      await newPost.save();
      res.json("Post has been created.");
    }
    catch (err) {res.status(500).send(err)}
  });

// API to update the post by ID...
router.put("/api/posts/:id", async (req, res) => {
  let {title,content}=req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required fields for an update" });
  }
  try {
    const postId = req.params.id;
    await Posts.findByIdAndUpdate(postId, {title,content});
    res.json("Post has been Updated");
  }
  catch (err) {res.status(500).send(err)}
});

// API to delete a post by ID
router.delete("/api/posts/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Posts.findByIdAndDelete(postId);
    if (!deletedPost) {res.status(404).json({ error: "Post not found" })}
    else {res.status(200).json({ message: "Post deleted successfully" })}
  } catch (err) {res.status(500).send(err)}
});

// API to retrieve the latest blog post from each unique category
router.get("/api/latest", async (req, res) => {
  try {
    const pipeline = [
      {$sort: { created_at: -1 }},
      {$group: {_id: "$category_id",latestPost: { $first: "$$ROOT" }}},
      {$replaceRoot: { newRoot: "$latestPost" }},
    ];
    const latestPosts = await Posts.aggregate(pipeline);
    res.json(latestPosts);
  }
  catch (error) {res.status(500).json({ err: "Somthing went Wrong.." })}
});

//TEST API...
router.get("/", (req, res) => {
  res.send("<h1>Welcome to Blog app</h1>");
});

module.exports = router;