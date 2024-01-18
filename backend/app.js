const express = require('express');
const path = require('path');
const app = express();
const students = require('./data.json')

// * CONSTANTS
const PORT = 5050;
app.use(express.static(path.resolve(__dirname, '../frontend')))
app.use(express.static(path.resolve(__dirname, '../public')))


// * MIDDLEWARE

// ? API ROUTE
app.get('/api/students', (req, res) => {
    
    res.status(200).json(students);
});

// * ROUTES

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../frontend/index.html'))
})
app.get('/about', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send(`<h1>Sorry, Page not found</h1>`)
})




// ! LISTEN SERVER
app.listen(PORT, () => {
    console.log(`Server listening on https://localserver${PORT}`)
})