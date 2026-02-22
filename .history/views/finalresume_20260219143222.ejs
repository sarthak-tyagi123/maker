const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");  // <- add this

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure 'public/uploads' folder exists
const uploadDir = path.join(__dirname, "public", "uploads");
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, uploadDir); // use ensured folder
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Home route -> form + live preview
app.get("/", (req, res) => {
    res.render("resume", { data: {} });
});

// Handle form submission -> final resume page
app.post("/generate", upload.single('photo'), (req, res) => {
    const data = req.body;

    if(req.file){
        data.photo = "/uploads/" + req.file.filename; // path finalresume me use karenge
    }

    res.render("finalresume", { data });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
