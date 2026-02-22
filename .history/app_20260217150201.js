const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/dashboard", (req, res) => {
    const tasks = [
        { title: "Website Review", priority: "High", status: "In Progress" },
        { title: "Bug Fixing", priority: "Medium", status: "Completed" },
        { title: "UI Design", priority: "Low", status: "To Do" }
    ];

    res.render("dashboard", { tasks });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/dashboard");
});
