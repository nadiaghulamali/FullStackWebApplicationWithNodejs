const Post = require('../database/models/post')
module.exports = async (req, res) => {

    const Post = await Post.findById(req.params.id);

    res.render("post", {
        post
    });

}