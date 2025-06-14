const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');
const rutaPacientes = Router();
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/login', pacientesController.login);
rutaPacientes.post('/',pacientesController.create);
rutaPacientes.put('/:id',pacientesController.update);
rutaPacientes.delete('/:id',pacientesController.delete);

//Otras rutas CRUD


module.exports = rutaPacientes;