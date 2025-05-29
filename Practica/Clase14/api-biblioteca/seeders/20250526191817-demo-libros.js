'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Libros', [
      {
        titulo: 'Don Quijote de la Mancha',
        genero: 'Novela',
        anioPublicacion: 1605,
        disponible: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Cien años de soledad',
        genero: 'Realismo mágico',
        anioPublicacion: 1967,
        disponible: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'El principito',
        genero: 'Fábula',
        anioPublicacion: 1943,
        disponible: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Libros', null, {});
  }
};