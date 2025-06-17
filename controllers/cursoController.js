import cursoModel from '../models/cursoModel.js';
import {
  sortByViewsAscending,
  sortByViewsDescending,
} from '../utils/sortUtils.js';

export default {
  // Obtener todos los cursos
  getCursos: (req, res, next) => {
    try {
      const cursos = cursoModel.getAll();
      res.json(cursos);
    } catch (error) {
      next(error);
    }
  },

  // Obtener curso por ID
  getCursoById: (req, res, next) => {
    try {
      const curso = cursoModel.getById(req.params.id);
      res.json(curso);
    } catch (error) {
      next(error);
    }
  },

  // Crear nuevo curso
  createCurso: (req, res, next) => {
    try {
      const newCurso = cursoModel.create(req.body);
      res.status(201).json(newCurso);
    } catch (error) {
      next(error);
    }
  },

  // Actualizar curso
  updateCurso: (req, res, next) => {
    try {
      const updatedCurso = cursoModel.update(req.params.id, req.body);
      res.json(updatedCurso);
    } catch (error) {
      next(error);
    }
  },

  // Eliminar curso
  deleteCurso: (req, res, next) => {
    try {
      const deletedCurso = cursoModel.delete(req.params.id);
      res.json({
        message: 'Curso eliminado correctamente',
        curso: deletedCurso,
      });
    } catch (error) {
      next(error);
    }
  },

  // Obtener cursos ordenados por vistas (ascendente)
  getCursosOrdenAscendente: (req, res, next) => {
    try {
      const cursos = cursoModel.getAll();
      res.json(sortByViewsAscending(cursos));
    } catch (error) {
      next(error);
    }
  },

  // Obtener cursos ordenados por vistas (descendente)
  getCursosOrdenDescendente: (req, res, next) => {
    try {
      const cursos = cursoModel.getAll();
      res.json(sortByViewsDescending(cursos));
    } catch (error) {
      next(error);
    }
  },

  // Obtener niveles permitidos
  getNivelesPermitidos: (req, res) => {
    res.json(['Principiante', 'Intermedio', 'Avanzado']);
  },
};
