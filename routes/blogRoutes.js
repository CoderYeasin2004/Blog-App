import express from "express";

import { blog_index, blog_details } from "../controllers/blogControllers.js";

const blogrouter = express.Router();

blogrouter.get("/", blog_index);
blogrouter.get("/:id", blog_details);

export default blogrouter;