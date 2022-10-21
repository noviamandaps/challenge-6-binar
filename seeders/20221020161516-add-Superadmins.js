'use strict';
const bcrypt = require("bcrypt");

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
     const hashedPassword = await bcrypt.hash("qwerty", 10);
     await queryInterface.bulkInsert("Superadmins", [{
       email: "superadmin@gmail.com",
       password: hashedPassword,
       createdAt: new Date(),
       updatedAt: new Date(),
     }, ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Superadmins", null, {});
  }
};
