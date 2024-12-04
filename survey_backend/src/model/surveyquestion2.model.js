const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");




const SurveyQuestionModel2 = sequelize.define("SurveyQuestion2",{
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },

    question: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
},{
   timestamps : true,
   tableName:'survey_questions_2' 
});



module.exports = SurveyQuestionModel2;