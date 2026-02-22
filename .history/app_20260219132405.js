const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Home route -> Resume Form
app.get('/', (req, res) => {
    res.render('resume');
});

// Form submit route
app.post('/resume', (req, res) => {
    const formData = req.body;
    res.render('preview', { data: formData });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
