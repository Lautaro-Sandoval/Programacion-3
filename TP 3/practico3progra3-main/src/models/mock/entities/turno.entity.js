const Identificador = require("./identificador.entity");

class Turno extends Identificador {
    constructor(fecha, hora, idPaciente, id = 0) {
        super(id);
        this.fecha = fecha;
        this.hora = hora;
        this.medico = "Nombre Doctor"
        this.idPaciente = idPaciente;
    }
}

module.exports = Turno;