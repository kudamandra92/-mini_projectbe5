'use strict';
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let tryData = [];
   for (let i = 0; i < 10; i++) {
    tryData.push({
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.exampleEmail(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
   }
   await queryInterface.bulkInsert('Users', tryData)
   tryData = [];
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
