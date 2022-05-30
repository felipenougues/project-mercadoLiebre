const express = require('express');
const app = express();

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3030;

const archHome = path.join(__dirname, '/views/home.html')


app.get('/', function(req, res) {
    res.sendFile(archHome)
})

app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "views/register.html"))
})


app.listen(PORT, () => {
    console.log("Servidor Corriendo")
});