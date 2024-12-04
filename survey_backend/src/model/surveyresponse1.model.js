const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");
const SurveyQuestionModel1 = require("../model/surveyquestion1.model");

// sequelize.sync();

const ResponseModel1 = sequelize.define("Response1",{
    id:{
        type:Sequelize.BIGINT,
        primaryKey : true,
        autoIncrement:true,
    },
    
    question_id:{
        type:Sequelize.BIGINT,
        references:{
          model:"SurveyQuestion1",
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
        allowNull: true,
    },
    roll_no:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    unique_classID:{
        type: Sequelize.STRING,
        allowNull:true,
    },
    unique_studentID:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    school:{
        type:Sequelize.STRING,
        allowNull: false
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
    tableName:'response_1'
})

SurveyQuestionModel1.hasMany(ResponseModel1, { as: 'responses', foreignKey: 'question_id' });
ResponseModel1.belongsTo(SurveyQuestionModel1, { as: 'question', foreignKey: 'question_id' });


module.exports = ResponseModel1;