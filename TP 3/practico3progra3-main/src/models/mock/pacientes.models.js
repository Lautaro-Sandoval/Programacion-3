const Persona = require('./../mock/entities/paciente.entity.js');

class PacientesModel {
  constructor() {
    this.data = [];
    this.data.push(new Persona("123456787", "Sergio", "Antozzi", "email@gmail.com", 1));
    this.id = 2;
  }
  // crea un dato nuevo (alta de cliente)
  create(paciente) {
    //TODO: verificar que no sea nulo si es nulo tierar excepcion
    if (!paciente || !paciente.dni || !paciente.nombre || !paciente.apellido || !paciente.email) {
      throw new Error("Paciente no válido tiene que tener dni, nombre, apellido y email");
    }

    //return persona;
    return new Promise((resolve, reject) => {
      paciente.id = this.id;
      this.id++;
      this.data.push(paciente);

      resolve(paciente);

    });
  }
  // actualiza los datos del cliente con id = id
  update(id, paciente) {
    try {
      const pacienteEncontrado = this.data.find((p) => p.id == id);
      if (!paciente) {
        return null;
      }
      pacienteEncontrado.dni = paciente.dni
      pacienteEncontrado.email = paciente.email;
      pacienteEncontrado.nombre = paciente.nombre;
      pacienteEncontrado.apellido = paciente.apellido
      return pacienteEncontrado;
    } catch (error) {
      console.log(error.message);
      return null;
    }

  }
  // elimina el cliente con id = id
  delete(id) {
    try {
      const pacienteEncontrado = this.data.find((p) => p.id == id);
      if (!pacienteEncontrado) {
        return null;
      }
      const pos = this.data.indexOf(pacienteEncontrado)
      this.data.splice(pos, 1); // elimina el elemento de la posición pos del arreglo
      return pacienteEncontrado;
    } catch (error) {
      console.log("Error: el id no existe");
      return null;
    }
  }
  // devuelve la lista completa en un arreglo de strings
  list() {
    return new Promise(
      (resolve, reject) => {
        resolve(this.data);
      }
    );
  }
}

module.exports = new PacientesModel();
