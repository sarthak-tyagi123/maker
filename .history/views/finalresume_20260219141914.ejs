const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // for CSS & uploaded images

// Multer setup for photo upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads'); // uploaded images folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // unique filename
    }
});
const upload = multer({ storage: storage });

// Home page - form
app.get('/', (req, res) => {
    res.render('resume'); // resume input form
});

// Resume submit
app.post('/resume', upload.single('photo'), (req, res) => {
    const data = req.body;

    // photo path
    if(req.file){
        data.photo = '/uploads/' + req.file.filename;
    }

    res.render('finalResume', { data });
});

app.listen(3000, () => console.log('Server running on port 3000'));
