import express from "express";
import morgan from "morgan";
import Blog from "./models/blog.js";
import mongoose from "mongoose";
import adminrouter from "./routes/adminRoutes.js";
import { configDotenv } from "dotenv";
configDotenv();

const port = 5000;
const app = express();

const dbURI = process.env.MONGOURL;

mongoose.connect(dbURI)
    .then((result) => {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "adminviews")

app.use("/node_modules", express.static("node_modules"));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req,res,next) => {
    res.locals.path = req.path;
    next();
});

app.get("/", (req,res) => {
    res.redirect("/blogs");
    
});

app.use("/blogs", adminrouter);

app.use((req,res) => {
    res.status(404).render("404", {title: "404"});
});
