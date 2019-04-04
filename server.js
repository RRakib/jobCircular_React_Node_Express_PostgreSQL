// Required Files
const express = require("express");
const db = require("./Config/database")
const jobs = require("./Controller/jobs")

// Connecting TO PostgreSQL
db.authenticate()
    .then(res => {
        console.log("Connected to Postgresql")
    })
    .catch(err => {
        console.log("ERROR!! " + err)
    })
    
// Middle Ware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routing For Server
app.use("/jobs" , jobs);

// Landing Page
app.get("/", (req, res) => {
    res.render("landing")
})

// Listening To PORT
const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})