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

// GET Contact
exp_router.get("/contact" , (req, res) => {
    res.render("contact")
})

// POST Add Jobs
exp_router.post("/add" , (req, res) => {
    // Destructuring
    const {title , technologies , budget, discription , contact_email} = req.body;
    const errors = [];
    
    if(!title){
        errors.push({title : "Please insert the title"})
    }
    if(!technologies){
        errors.push({technologies : "Please insert the technologies"})
    }
    if(!budget){
        errors.push({budget : "Please insert the budget"})
    }
    if(!discription){
        errors.push({discription : "Please insert the discription"})
    }
    if(!contact_email){
        errors.push({contact_email : "Please insert the contact_email"})
    }

    if(errors.length > 0){
        res.json(errors)
    }
    else{
        // Adding To Database
        Job.create({title , technologies , budget, discription , contact_email})
        .then(data => {return (
                res.status(200).json(data)
        )})
        .catch(err => console.log("ERROR!!! " + err))
    }
})


// Exports
module.exports = exp_router