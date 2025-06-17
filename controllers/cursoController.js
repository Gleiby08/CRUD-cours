import cursoModel from '../models/cursoModel.js';
import {
  sortByViewsAscending,
  sortByViewsDescending,
} from '../utils/sortUtils.js';

// Temas matemáticos definidos directamente
const temasMatematicos = [
  'álgebra',
  'cálculo',
  'geometría',
  'trigonometría',
  'estadística',
  'ecuaciones',
  'matemática',
  'matemáticas',
];

// Función para filtrar cursos matemáticos
const filtrarCursosMatematicos = (cursos) => {
  return cursos.filter((curso) => {
    const titulo = curso.titulo.toLowerCase();
    return temasMatematicos.some((tema) => titulo.includes(tema));
  });
};

export default {
  // Obtener todos los cursos matemáticos
  getCursosMatematicos: (req, res, next) => {
    try {
      const cursos = cursoModel.getAll();
      const cursosMatematicos = filtrarCursosMatematicos(cursos);
      res.json(cursosMatematicos);
    } catch (error) {
      next(error);
    }
  },

  // Obtener curso matemático por ID
  getCursoMatematicoById: (req, res, next) => {
    try {
      const curso = cursoModel.getById(req.params.id);
      res.json(curso);
    } catch (error) {
      next(error);
    }
  },

  // Crear nuevo curso matemático
  createCursoMatematico: (req, res, next) => {
    try {
      const newCurso = cursoModel.create(req.body);
      res.status(201).json(newCurso);
    } catch (error) {
      next(error);
    }
  },

  // Actualizar curso matemático
  updateCursoMatematico: (req, res, next) => {
    try {
      const updatedCurso = cursoModel.update(req.params.id, req.body);
      res.json(updatedCurso);
    } catch (error) {
      next(error);
    }
  },

  // Eliminar curso matemático
  deleteCursoMatematico: (req, res, next) => {
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
      const cursosMatematicos = filtrarCursosMatematicos(cursos);
      res.json(sortByViewsAscending(cursosMatematicos));
    } catch (error) {
      next(error);
    }
  },

  // Obtener cursos ordenados por vistas (descendente)
  getCursosOrdenDescendente: (req, res, next) => {
    try {
      const cursos = cursoModel.getAll();
      const cursosMatematicos = filtrarCursosMatematicos(cursos);
      res.json(sortByViewsDescending(cursosMatematicos));
    } catch (error) {
      next(error);
    }
  },

  // Obtener niveles permitidos
  getNivelesPermitidos: (req, res) => {
    res.json(['Principiante', 'Intermedio', 'Avanzado']);
  },
};
