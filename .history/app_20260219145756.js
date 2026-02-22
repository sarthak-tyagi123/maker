const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "public", "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

// Home -> resume form + live preview
app.get("/", (req, res) => res.render("resume", { data: {} }));

// Generate final resume -> multer handles photo
app.post("/generate", upload.single("photo"), (req, res) => {
    const data = req.body;
    if (req.file) data.photo = "/uploads/" + req.file.filename;
    res.render("finalresume", { data });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));



meri gaand 