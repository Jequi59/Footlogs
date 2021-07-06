const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const Team = require('./models/team');
const team = require('./models/team');

// connect to mongoose
mongoose.connect("mongodb+srv://jquievreuxdev:Erin25012017@cluster0.aejzm.mongodb.net/Footlogs",
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée"));

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//require route
/* app.use("/", require("./routes/noteRoute")); */

app.post('/addteam', (req, res, next) => {
    const team = new Team ({
        ...req.body
    });
    team.save()
        .then(() => res.status(201).json({message : "Equipe enregistrée !"}))
            .catch(() => res.status(400).json({error}))
});

app.get('/teams', (req, res, next) => {
    team.find()
        .then(teams => res.status(200).json(teams))
            .catch(error => res.status(400).json({error}))
})

app.get('/teams/uk', (req, res, next) => {
    team.find({teamLeague: 'Premiere League'})
        .then(teams => res.status(200).json(teams))
            .catch(error => res.status(400).json({error}))
})

module.exports = app;