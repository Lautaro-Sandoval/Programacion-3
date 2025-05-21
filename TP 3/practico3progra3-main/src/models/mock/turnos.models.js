const Turno = require('../mock/entities/turno.entity');

class TurnosModel {
    constructor() {
        this.data = [];
        this.data.push(new Turno("25/15/2025", "19:20", 1, 1));
        this.id = 2
    }

    create(turno) {
        if(!turno || !turno.fecha || !turno.hora || !turno.idPaciente) {
            throw new Error("Turno no válido, tiene que tener fecha, hora y idPaciente");
        }

        return new Promise((resolve, reject) => {
            turno.id = this.id;
            this.id++;
            this.data.push(turno);
            resolve(turno);
        })
    }

    update(id, turno) {
        try {
            const turnoEncontrado = this.data.find((t) => t.id == id);
            if(!turnoEncontrado) {
                return null;
            }
            turnoEncontrado.fecha = turno.fecha;
            turnoEncontrado.hora = turno.hora;
            turnoEncontrado.idPaciente = turno.idPaciente;
            return turnoEncontrado;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    delete(id) {
        try {
            const turnoEncontrado = this.data.find((t) => t.id == id);
            if (!turnoEncontrado) {
                return null;
            }
            const pos = this.data.indexOf(turnoEncontrado);
            this.data.splice(pos, 1); 
            return turnoEncontrado;
        } catch (error) {
            constole.log("Error: el id no existe");
            return null;
        }
    }

    list() {
        return new Promise(
            (resolve, reject) => {
                resolve(this.data);
            }
        );
    }

    listById(idPaciente) {
        return new Promise(
            (resolve, reject) => {
                const turno = this.data.filter((t) => t.idPaciente == idPaciente);
                if (!turno) {
                    console.log("Error: el idPaciente no existe");
                    resolve(null);
                } else {
                    resolve(turno);
                }
            }
        );
    }
}

module.exports = new TurnosModel();