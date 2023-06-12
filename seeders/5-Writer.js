'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        { "userId": 12, "pseudonyn": "ac" },
        { "userId": 13, "pseudonyn": "posuere" },
        { "userId": 14, "pseudonyn": "pede posuere nonummy" },
        { "userId": 15, "pseudonyn": "cursus" },
        { "userId": 16, "pseudonyn": "mauris" }
      ];      
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Writers', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Writers', null, {});
  }
};
