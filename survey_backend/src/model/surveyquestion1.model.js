const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");




const SurveyQuestionModel1 = sequelize.define("SurveyQuestion1",{
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
   tableName:'survey_questions_1' 
});



module.exports = SurveyQuestionModel1;