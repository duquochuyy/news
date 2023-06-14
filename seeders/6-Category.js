'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        {
            "name": "Kinh tế",
            "managerId": 1,
        },
        {
            "name": "Nông sản",
            "managerId": 1,
            "parentId": 1
        },
        {
            "name": "Hải sản",
            "managerId": 1,
            "parentId": 1
        },
        {
            "name": "Thể thao",
            "managerId": 2,
        },
        {
            "name": "Trong nước",
            "managerId": 2,
            "parentId": 4
        },
        {
            "name": "Ngoài nước",
            "managerId": 2,
            "parentId": 4
        },
        {
            "name": "Pháp luật",
            "managerId": 3,
        },
        {
            "name": "Đời sống",
            "managerId": 4,
        },
        {
            "name": "Công nghệ",
            "managerId": 3,
        },
        {
            "name": "Sức khỏe",
            "managerId": 4,
        },
        {
            "name": "Âm nhạc",
            "managerId": 5,
        }
    ]
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Categories', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
