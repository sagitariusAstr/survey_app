//local configuration

const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('survey','root','dbpass@1234',{
    dialect : "mariadb",
    host: "localhost",
    port:3306

})



sequelize.authenticate()
    .then(() => {
        console.log("mariaDB Connected successfully")
    })
    .catch((err) => {
        console.log("Unable to connect to db",err)
    })



module.exports = sequelize;