const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes/route');



mongoose.connect("mongodb://localhost:27017/consTool", { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.error('Connection error!'));
db.once('open', () => {
    console.info('Mongo Successfully connected!');
});


const express = require("express"),
    app = express(),
    port = process.env.PORT || 5000,
    cors = require("cors");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

app.use(config.appRoute, routes);


app.get("/", (req, res) => {
    res.send({ message: "We did it!" });
});