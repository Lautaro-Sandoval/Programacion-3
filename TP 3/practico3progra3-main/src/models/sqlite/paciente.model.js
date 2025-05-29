const {Paciente} = require('../sqlite/entities/paciente.entity.js');

  const getPacientesModel =  ()=>{
    const users = Paciente.findAll();
    return users;
  }

  const createPacienteModel = (paciente) => {
    return Paciente.create({paciente});
  }

  const updatePacienteModel = (id, paciente) => {
    return Paciente.update({paciente}, {where: {id}});
  }
  const deletePacienteModel = (id) => {
    return Paciente.destroy({where: {id}});
  }

  module.exports = {
    getPacientesModel,
    createPacienteModel,
    updatePacienteModel,
    deletePacienteModel
  }
