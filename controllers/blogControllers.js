import Blog from "../models/blog.js";

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render("index", {blogs: result, title: "All Blogs"});
    })
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        if(result){
            res.render("details", {blog: result, title: "Details"})
        } else {
            res.render("404", {title: "Not Found"});
        }
    })
    .catch(err => {
        console.log(err);
    })
}

export {
    blog_index,
    blog_details
}