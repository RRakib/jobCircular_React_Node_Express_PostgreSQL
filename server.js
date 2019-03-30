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
app.use("/jobs" , jobs);
app.use(express.json());
app.set("view engine" , "ejs");
app.use(express.static("Public"));
app.use(express.urlencoded({extended: false}));

// Listening To PORT
const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})