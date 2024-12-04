'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('response_1', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT
      },
      question_id: {
          type: Sequelize.BIGINT,
          allowNull: true,
          references: {
              model: 'survey_questions_1',
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      date_of_birth: {
          type: Sequelize.DATE,
          allowNull: false
      },
      response: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      }
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('response_1');
  }
};
