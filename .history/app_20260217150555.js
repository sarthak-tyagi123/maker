const express = require("express");
const path = require("path");

const app = express();
D:\khatabook\public\css\style.css
// EJS set karo
app.set("view engine", "ejs");

// Static folder set karo
app.use(express.static(path.join(__dirname, "public")));

// Dashboard route
app.get("/", (req, res) => {

    const tasks = [
        { title: "Website Review", priority: "High", status: "In Progress" },
        { title: "Bug Fixing", priority: "Medium", status: "Completed" },
        { title: "UI Design", priority: "Low", status: "To Do" }
    ];

    res.render("dashboard", { tasks });
});

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
