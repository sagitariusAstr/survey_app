const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");
const SurveyQuestionModel2 = require("../model/surveyquestion2.model");

// sequelize.sync();

const ResponseModel2 = sequelize.define("Response2",{
    id:{
        type:Sequelize.BIGINT,
        primaryKey : true,
        autoIncrement:true,
    },
    
    question_id:{
        type:Sequelize.BIGINT,
        references:{
          model:"SurveyQuestion2",
          key:"id"
        },
        allowNull:true,
      },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    class:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    roll_no:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    unique_classID:{
        type: Sequelize.STRING,
        allowNull:false
    },
    unique_studentID:{
        type:Sequelize.STRING,
        allowNull:false
    },
    role:{
        type:Sequelize.STRING,
        allowNull: true
    },
    response: {
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
    timestamps:true,
    tableName:'response_2'
})

// SurveyQuestionModel2.hasMany(ResponseModel2, { as: 'responses', foreignKey: 'question_id' });
ResponseModel2.belongsTo(SurveyQuestionModel2, { as: 'question', foreignKey: 'question_id' });



module.exports = ResponseModel2;