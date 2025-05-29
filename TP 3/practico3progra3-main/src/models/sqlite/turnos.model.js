const { Turno } = require('../sqlite/entities/turno.entity.js');

const getTurnosModel = () => {
    const turnos = Turno.findAll();
    return turnos;
}
const getTurnoByIdModel = (id) => {
    return Turno.findByPk(id);
}
const createTurnoModel = (turno) => {
    return Turno.create({ turno });
}

const updateTurnoModel = (id, turno) => {
    return Turno.update({ turno }, { where: { id } });
}
const deleteTurnoModel = (id) => {
    return Turno.destroy({ where: { id } });
}

module.exports = {
    getTurnosModel,
    getTurnoByIdModel,
    createTurnoModel,
    updateTurnoModel,
    deleteTurnoModel
}