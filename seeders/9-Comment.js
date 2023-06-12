'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [{
      "time": "2023-05-26 22:36:51",
      "content": "et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in",
      "articleId": 27,
      "userId": 26
    }, {
      "time": "2023-06-03 19:02:36",
      "content": "odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
      "articleId": 32,
      "userId": 20
    }, {
      "time": "2023-03-28 07:39:13",
      "content": "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum",
      "articleId": 50,
      "userId": 7
    }, {
      "time": "2022-08-16 18:58:22",
      "content": "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
      "articleId": 80,
      "userId": 19
    }, {
      "time": "2022-07-27 02:19:27",
      "content": "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
      "articleId": 52,
      "userId": 15
    }, {
      "time": "2023-04-15 00:38:02",
      "content": "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
      "articleId": 24,
      "userId": 21
    }, {
      "time": "2022-12-13 22:53:28",
      "content": "adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget",
      "articleId": 5,
      "userId": 3
    }, {
      "time": "2022-11-03 08:57:56",
      "content": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan",
      "articleId": 60,
      "userId": 10
    }, {
      "time": "2022-09-04 06:13:31",
      "content": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
      "articleId": 25,
      "userId": 18
    }, {
      "time": "2022-10-15 07:13:36",
      "content": "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
      "articleId": 31,
      "userId": 2
    }, {
      "time": "2023-06-19 16:46:43",
      "content": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis",
      "articleId": 32,
      "userId": 3
    }, {
      "time": "2022-10-13 00:50:03",
      "content": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
      "articleId": 44,
      "userId": 24
    }, {
      "time": "2022-12-16 22:29:43",
      "content": "enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
      "articleId": 98,
      "userId": 18
    }, {
      "time": "2022-08-11 03:39:43",
      "content": "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
      "articleId": 74,
      "userId": 27
    }, {
      "time": "2022-11-27 03:46:28",
      "content": "eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed",
      "articleId": 60,
      "userId": 2
    }, {
      "time": "2022-08-07 12:08:45",
      "content": "vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
      "articleId": 23,
      "userId": 14
    }, {
      "time": "2023-06-06 00:51:34",
      "content": "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
      "articleId": 69,
      "userId": 9
    }, {
      "time": "2022-08-02 08:26:50",
      "content": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
      "articleId": 55,
      "userId": 6
    }, {
      "time": "2022-08-22 01:28:08",
      "content": "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
      "articleId": 90,
      "userId": 21
    }, {
      "time": "2023-04-19 18:08:03",
      "content": "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec",
      "articleId": 49,
      "userId": 16
    }]
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Comments', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
