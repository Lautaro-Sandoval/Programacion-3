const { Libro } = require('../api-biblioteca/models');

// Obtener todos los libros
exports.getAllLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.status(200).json(libros);
    } catch (error) {
        console.error('Error al obtener libros:', error);
        res.status(500).json({ message: 'Error al obtener libros' });
    }
};

// Obtener un libro por ID
exports.getLibroById = async (req, res) => {
    try {
        const libro = await Libro.findByPk(req.params.id);
        if (!libro) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el libro' });
    }
};

// Crear un nuevo libro
exports.createLibro = async (req, res) => {
    try {
        const libro = await Libro.create(req.body);
        res.status(201).json(libro);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el libro', error: error.message });
    }
};

// Actualizar un libro
exports.updateLibro = async (req, res) => {
    try {
        const [updated] = await Libro.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedLibro = await Libro.findByPk(req.params.id);
            return res.status(200).json(updatedLibro);
        }

        throw new Error('Libro no encontrado');
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar libro', error: error.message });
    }
};

// Eliminar un libro
exports.deleteLibro = async (req, res) => {
    try {
        const deleted = await Libro.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            return res.status(204).send();
        }

        throw new Error('Libro no encontrado');
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar libro', error: error.message });
    }
};