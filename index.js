var express = require("express");
var app = express();
const PORT = process.env.port || 3000;
var path = require("path");
const fs = require("fs");
const cors = require("cors");
app.use(cors());
app.use(express.static(__dirname + "/static"));
const images = require("./static/json/images.json");
const gallery = require("./static/json/gallery.json");
const bodyParser = require("body-parser");
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/html/index.html"));
});

app.get("/wishes", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/html/wishes.html"));
});

app.get("/birthday", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/html/birthday.html"));
});

app.get("/random", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/html/random.html"));
});

app.get("/randomImg", function (req, res) {
    let x = Math.floor(Math.random() * images.length);
    res.send(JSON.stringify({ max: images.length, index: x, ...images[x] }));
});

app.get("/gallery", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/html/gallery.html"));
});

app.get("/galleryImgs", function (req, res) {
    res.send(JSON.stringify(gallery));
});

app.post("/password", function (req, res) {
    let x = req.body.password;
    x = x.toLowerCase();
    x = x.trim();
    if (x == "aisyram") res.send(JSON.stringify({ status: "ok" }));
    else res.send(JSON.stringify({ status: "error" }));
});

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT);
});

//module.exports = app;
