// Required Files
const express = require("express")
const router = express.Router();

// Routes
router.get("/" , (req, res) => {
    res.send("JOBS")
})

// Exports
module.exports = router