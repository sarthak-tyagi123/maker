const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Home route -> form + live preview
app.get("/", (req, res) => {
    res.render("resume", { data: {} }); // empty data initially
});

// Handle form submission -> final resume page
app.post("/generate", (req, res) => {
    const data = req.body;
    res.render("finalresume", { data });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
