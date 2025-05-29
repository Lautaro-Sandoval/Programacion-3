const { DataTypes } = require('sequelize');
const { sequelize } = require('./../config/db.js');

const Turno = sequelize.define('Turno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

module.exports = { Turno };