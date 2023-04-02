var express = require("express");
var app = express();
const PORT = 3000;
var path = require("path");
const fs = require("fs");
const cors = require("cors");
app.use(cors());
app.use(express.static("static"));
const images = require("./static/json/images.json");

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/html/index.html"));
});

app.get("/random", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/html/random.html"));
});

app.get("/randomImg", function (req, res) {
    res.send(JSON.stringify(images[Math.floor(Math.random() * images.length)]));
});

app.get("/gallery", function (req, res) {
    console.log(req.body);
    res.send(JSON.stringify("123"));
});

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT);
});

//module.exports = app;
