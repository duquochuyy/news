'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        { "userId": 1 },
        { "userId": 2 },
        { "userId": 3 },
        { "userId": 4 },
        { "userId": 5 }
      ]
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Editors', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Editors', null, {});
  }
};
