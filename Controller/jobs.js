// Required Files
const express = require("express")
const exp_router = express.Router();
const job = require("../Models/Jobs")
const db = require("../Config/database");

// Routes
exp_router.get("/" , (req, res) => {
    job.findAll()
        .then(jobs => {
            console.log(jobs)
            res.sendStatus(200)
        })
        .catch(err => {
            console.log("ERROR" + err)
        })
})

// Exports
module.exports = exp_router