'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Libro.init({
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    anioPublicacion: DataTypes.INTEGER,
    disponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};