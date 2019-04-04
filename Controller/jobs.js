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
    const post = {
        title: "Looking For A React Developer",
        technologies: "react , javascript, redux",
        budget: "1000$",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        contact_email: "16103030@iubat.edu"
    }
    const {title , technologies , budget, discription , contact_email} = post;
    Job
        .create({title , technologies , budget, discription , contact_email})
        .then(data => console.log("DataSaved!"))
        .catch(err => console.log("ERROR!!! " + err))
})

// GET Contact
exp_router.get("/contact" , (req, res) => {
    res.render("contact")
})

// POST Add Jobs
exp_router.post("/add" , (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
})


// Exports
module.exports = exp_router