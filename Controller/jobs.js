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

// Tesing DB
exp_router.get("/add" , (req, res) => {
    const data = {
        title : "Looking for a React Developer",
        technologies : "React, javascript, html,css",
        budget: "3000$",
        discription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        contact_email : "16103030@iubat.edu"
    }
    let {title, technologies , budget , discription , contact_email} = data
    // Job.
    //     create({
    //         title, 
    //         technologies , 
    //         budget ,
    //         discription , 
    //         contact_email
    //     })
    //     .then(jobs => {res.redirect("/"); console.log(jobs)})
    //     .catch(err => {console.log(err)})
})

// Exports
module.exports = exp_router