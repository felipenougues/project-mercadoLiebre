const path = require('path');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

const archHome = path.join(__dirname, "/views/home.html")


app.get("/", function(req, res) {
    res.sendFile(archHome)
})

app.get("/views/login", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get("/views/register", function(req, res) {
    res.sendFile(path.join(__dirname, "http://127.0.0.1:5500/views/register.html"))
})
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Servidor Corriendo")
});