import express from "express";
import {blog_index, blog_create_get, blog_create_post, blog_delete, blog_details} from "../controllers/adminController.js";

const adminrouter = express.Router();

adminrouter.get("/create", blog_create_get);
adminrouter.get("/",blog_index);
adminrouter.get("/:id", blog_details);
adminrouter.post("/", blog_create_post);
adminrouter.delete("/:id", blog_delete);

export default adminrouter;