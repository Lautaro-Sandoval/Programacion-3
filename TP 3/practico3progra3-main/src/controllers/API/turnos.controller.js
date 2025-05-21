const turnosModel = require('./../../models/mock/turnos.models.js')
const Turno = require('./../../models/mock/entities/turno.entity.js')

class TurnosController {
    async list(req, res) {

        res.status(200).json(await turnosModel.list());
    }

    async listById(req, res) {
        const idPaciente = req.params.idPaciente;
        const turno = await turnosModel.listById(idPaciente);
        if (!turno) {
            res.status(404).json({ message: "no se encontro el turno" });
            return;
        } else {
            res.status(200).json(turno);
        }
    }

    async create(req, res) {
        const { fecha, hora, idPaciente } = req.body;
        const nuevoTurno = new Turno(fecha, hora, idPaciente);
        const info = await turnosModel.create(nuevoTurno);
        if (!info) {
            res.status(400).json({ message: "no se pudo crear el turno" });
            return;
        } else {
            res.status(201).json(info);
        }
    }
    delete(req, res) {
        const id = req.params.id;
        const turno = turnosModel.delete(id);
        if (!turno) {
            res.status(404).json({ message: "no se encontro el turno" });
            return;
        } else {
            res.status(200).json({ message: "eliminado" });
        }
    }
    update(req, res) {
        const id = req.params.id;
        const { fecha, hora, idPaciente } = req.body;
        const nuevoTurno = new Turno(fecha, hora, idPaciente);
        const turno = turnosModel.update(id, nuevoTurno);
        if (!turno) {
            res.status(404).json({ message: "no se encontro el turnoo" });
            return;
        } else {
            res.status(200).json({ message: "actualizado" });
        }
    }
}

module.exports = new TurnosController();