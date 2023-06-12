'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        {
          "subscribeDate": "2023-06-16 23:32:28",
          "expireDate": "2023-06-23 23:32:28",
          "userId": 7
        },
        {
          "subscribeDate": "2023-06-15 14:08:55",
          "expireDate": "2023-06-22 14:08:55",
          "userId": 8
        },
        {
          "subscribeDate": "2023-06-19 23:30:02",
          "expireDate": "2023-06-26 23:30:02",
          "userId": 9
        },
        {
          "subscribeDate": "2023-06-13 20:01:11",
          "expireDate": "2023-06-20 20:01:11",
          "userId": 10
        },
        {
          "subscribeDate": "2023-06-14 05:08:53",
          "expireDate": "2023-06-21 05:08:53",
          "userId": 11
        }
      ];      
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Subscribers', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subscribers', null, {});
  }
};
