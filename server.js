import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import blogrouter from "./routes/blogRoutes.js"
import { configDotenv } from "dotenv";
configDotenv();

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use("/node_modules", express.static("node_modules"));
app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
})

const dbURI = process.env.MONGOURL;

mongoose.connect(dbURI)
.then((result) => {
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
})
.catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", {title: "About"});
});

app.get("/contact", (req, res) => {
    res.render("contact", {title: "Contact"});
})

app.use("/blogs", blogrouter)

app.use((req, res) => {
    res.status(404).render("404", {title: "404"});
})

