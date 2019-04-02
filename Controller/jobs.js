// Required Files
const express = require("express")
const exp_router = express.Router();
const Job = require("../Models/Jobs")
const db = require("../Config/database");

// Routes
// Landing Page
exp_router.get("/" , (req, res) => {
    Job.findAll()
        .then(jobs => {
            console.log(jobs)
            res.sendStatus(200)
        })
        .catch(err => {
            console.log("ERROR" + err)
        })
})

// All Jobs
exp_router.get("/all_jobs" , (req, res) => {
    res.render("jobs")
})

// Add Jobs
exp_router.get("/add" , (req, res) => {
    res.render("add")
})

// Contact
exp_router.get("/contact" , (req, res) => {
    res.render("contact")
})

// Post Add
exp_router.post("/add" , (req, res) => {
})


// Exports
module.exports = exp_router