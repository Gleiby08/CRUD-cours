import express from 'express';
import cursoController from '../controllers/cursoController.js';
import { validateId } from '../middlewares/idValidator.js';
import { validateCurso } from '../middlewares/cursoValidator.js';

const router = express.Router();

// Middleware para validar ID en rutas que usen :id
router.param('id', validateId);

// Rutas CRUD
router.get('/', cursoController.getCursos);
router.post('/', validateCurso(true), cursoController.createCurso);
router.get('/:id', cursoController.getCursoById);
router.put('/:id', validateCurso(false), cursoController.updateCurso);
router.delete('/:id', cursoController.deleteCurso);

// Rutas adicionales
router.get('/orden/ascendente', cursoController.getCursosOrdenAscendente);
router.get('/orden/descendente', cursoController.getCursosOrdenDescendente);
router.get('/niveles', cursoController.getNivelesPermitidos);

export default router;
