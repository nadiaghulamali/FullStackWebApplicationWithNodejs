const mongoose = require('mongoose');
const Post = require('./database/models/post');


  async function getPosts() {
    try {
      const posts = await Post.find({});
      console.log(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  async function createPost() {
    try {
      const post = await Post.create({
        title: 'My first blog post',
        description: "My first blog post description",
        content: 'Lorem ipsum content.'
      });
      console.log('Post created:', post);
    } catch (error) {
      console.error("Error caught:", error);
    }
  }

  async function updatePost() {
    try {
      const post = await Post.findByIdAndUpdate('66f805ad9b844bf183ef3bf7', {
        title: 'My first blog post',
        description: "My first blog post description of lorem",
        content: 'Lorem ipsum content.'
      });
      console.log('Post updated:', post);
    } catch (error) {
      console.error("Error caught:", error);
    }
  }





  mongoose.connect('mongodb://127.0.0.1:27017/node-js-test-blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
    createPost(); 
    getPosts(); 
    updatePost(); 
  })
  .catch(err => console.error('Database connection error:', err));
