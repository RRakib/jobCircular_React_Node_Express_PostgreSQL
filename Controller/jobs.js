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
            res.json(jobs)
        })
        .catch(err => {
            console.log("ERROR" + err)
        })
})

// GET All Jobs
exp_router.get("/all_jobs" , (req, res) => {
    res.render("jobs")
})

// GET Add Jobs
exp_router.get("/add" , (req, res) => {

})

// GET Contact
exp_router.get("/contact" , (req, res) => {
    res.render("contact")
})

// POST Add Jobs
exp_router.post("/add" , (req, res) => {
    // Destructuring
    const {title , technologies , budget, discription , contact_email} = req.body;

    // Adding To Database
    Job.create({title , technologies , budget, discription , contact_email})
       .then(data => {return (
            res.status(200).json(data)
       )})
       .catch(err => console.log("ERROR!!! " + err))
})


// Exports
module.exports = exp_router