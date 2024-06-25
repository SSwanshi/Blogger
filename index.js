import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = []; 

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

app.post('/add-post', (req, res) => {
    const { title, body } = req.body;
    const newPost = {
        title: title,
        content: body
    };
    posts.unshift(newPost); 
    res.redirect('/');
});

app.get('/post/:index', (req, res) => {
    const postIndex = req.params.index;
    const post = posts[postIndex];
    if (post) {
        res.render('post', { title: post.title, body: post.content });
    } else {
        res.status(404).send('Post not found');
    }
});

app.get("/post1", (req, res) => {
    const latestPost = posts.length > 0 ? posts[0] : { title: "No Posts Yet", content: "No content available" };
    res.render("post1", { post: latestPost });
});

app.get("/home", (req, res) => {
    res.render("index", { posts: posts });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/mypost1", (req, res) =>{
    res.render("mypost1");
});

app.get("/mypost2", (req, res) =>{
    res.render("mypost2");
});

app.get("/mypost3", (req, res) =>{
    res.render("mypost3");
});

app.get("/mypost4", (req, res) =>{
    res.render("mypost4");
});

app.get("/mypost5", (req, res) =>{
    res.render("mypost5");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
