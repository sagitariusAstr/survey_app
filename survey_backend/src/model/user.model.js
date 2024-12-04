const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");



    const UserModel = sequelize.define("User",{
        id:{
            type:Sequelize.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        name:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique:true,
        },
        
        password:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        role:{
            type:Sequelize.ENUM('admin','teachers','school'),
            allowNull : false,
        },
        
        
        status:{
            type:Sequelize.ENUM('active','inactive'),
            defaultValue:"inactive"
        }
        
        


    },{
        timestamps: true,
        tableName:'users'
    });

   


module.exports = UserModel;