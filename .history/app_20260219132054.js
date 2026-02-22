
const express = require('express');


const app = express();


const PORT = 3000;


app.use(express.json()); // To parse JSON body


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.json({ message: 'About Page' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
