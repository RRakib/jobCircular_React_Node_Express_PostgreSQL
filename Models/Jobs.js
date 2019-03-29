// Required Files
const Sequelize = require("sequelize");
const db = require("../Config/database")

// Creating Model
const Job = db.define("job", {
    title : {
        type : Sequelize.STRING 
    },
    technologies : {
        type : Sequelize.STRING 
    },
    discription : {
        type : Sequelize.STRING 
    },
    budget : {
        type : Sequelize.STRING 
    },
    contact_email: {
        type : Sequelize.STRING 
    }
})

// Exports
module.exports = Job