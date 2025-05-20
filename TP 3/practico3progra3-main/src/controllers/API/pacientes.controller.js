const pacientesModel = require('./../../models/mock/pacientes.models.js')
const Paciente = require('./../../models/mock/entities/paciente.entity.js')
class PacientesController {
    async list(req, res) {

        res.status(200).json(await pacientesModel.list());
    }
    async create(req, res) {
        const { dni, nombre, apellido, email } = req.body;

        const nuevoPaciente = new Paciente(dni, nombre, apellido, email);

        const info = await pacientesModel.create(nuevoPaciente);
        if (!info) {
            res.status(400).json({ message: "no se pudo crear el paciente" });
            return;
        } else {
            res.status(201).json(info);
        }
    }
    delete(req, res) {
        const id = req.params.id;
        const paciente = pacientesModel.delete(id);
        if (!paciente) {
            res.status(404).json({ message: "no se encontro el paciente" });
            return;
        }
        else {
            res.status(200).json({ message: "eliminado" });
        }
    }
    update(req, res) {
        const id = req.params.id;
        const { dni, nombre, apellido, email } = req.body;
        const nuevoPaciente = new Paciente(dni, nombre, apellido, email);
        const paciente = pacientesModel.update(id, nuevoPaciente);
        if (!paciente) {
            res.status(404).json({ message: "no se encontro el paciente" });
            return;
        } else {
            res.status(200).json({ message: "actualizado" });
        }
    }
}

module.exports = new PacientesController();




