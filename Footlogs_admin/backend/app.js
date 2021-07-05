const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// connect to mongoose
mongoose.connect("mongodb+srv://jquievreuxdev:Erin25012017@cluster0.aejzm.mongodb.net/Footlogs",{useNewUrlParser: true, useUnifiedTopology: true})

//require route
/* app.use("/", require("./routes/noteRoute")); */

app.post('/addteam', (req, res, next) => {
    console.log(req.body);
    res.json(req.body)
})

module.exports = app;