const Sequelize = require("sequelize");

// module.exports = new Sequelize("jobCircular" , "postgres" , "k9AfcdFi" , {
//     host : "localhost",
//     dialect : "postgres",

//     pool : {
//         max : 5,
//         min : 0,
//         acquire : 30000,
//         idle: 10000
//     }
// });


module.exports = new Sequelize("postgres//postgres:k9AfcdFi@localhost:5432/jobCircular");