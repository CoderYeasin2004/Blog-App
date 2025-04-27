// mongodb+srv://hyeasin59:hyeasin59@cluster0.s07ekdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;