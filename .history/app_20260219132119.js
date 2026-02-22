
const express = require('express');


const app = express();


const PORT = 3000;


app.use(express.json()); 


app.get('/', (req, res) => {
    res.srender('Hello World!');
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
