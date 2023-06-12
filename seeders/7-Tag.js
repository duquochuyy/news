'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        {
            "name": "Thị trường"
        }, {
            "name": "Lúa gạo"
        }, {
            "name": "Xuất khẩu hải sản" 
        }, {
            "name": "Bóng đá"
        },{
            "name": "Bóng đá Việt Nam"
        }, {
            "name": "Thể thao thế giới" 
        }, {
            "name": "Lừa đảo" 
        }, {
            "name": "Chuyện thú vị"
        }, {
            "name": "Trí tuệ nhân tạo" 
        }, {
            "name": "Làm đẹp" 
        }, {
            "name": "Rap Việt"
        }
    ]
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Tags', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
