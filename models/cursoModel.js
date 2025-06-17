class CursoModel {
  constructor() {
    this.cursos = [
      // 8 cursos de matemáticas predefinidos
      {
        id: 1,
        titulo: "Álgebra Lineal",
        descripcion: "Vectores, matrices y transformaciones lineales",
        vistas: 1500,
        nivel: "Intermedio",
        materia: "Matemáticas"
      },
      {
        id: 2,
        titulo: "Cálculo Diferencial",
        descripcion: "Límites y derivadas aplicados",
        vistas: 3200,
        nivel: "Avanzado",
        materia: "Matemáticas"
      },
      {
        id: 3,
        titulo: "Cálculo Integral",
        descripcion: "Integrales definidas e indefinidas",
        vistas: 2800,
        nivel: "Avanzado",
        materia: "Matemáticas"
      },
      {
        id: 4,
        titulo: "Geometría Analítica",
        descripcion: "Estudio de figuras mediante coordenadas",
        vistas: 1200,
        nivel: "Intermedio",
        materia: "Matemáticas"
      },
      {
        id: 5,
        titulo: "Ecuaciones Diferenciales",
        descripcion: "Solución de ecuaciones diferenciales ordinarias",
        vistas: 2500,
        nivel: "Avanzado",
        materia: "Matemáticas"
      },
      {
        id: 6,
        titulo: "Probabilidad y Estadística",
        descripcion: "Teoría de probabilidades y análisis de datos",
        vistas: 1800,
        nivel: "Intermedio",
        materia: "Matemáticas"
      },
      {
        id: 7,
        titulo: "Matemáticas Discretas",
        descripcion: "Estructuras discretas y combinatoria",
        vistas: 2100,
        nivel: "Intermedio",
        materia: "Matemáticas"
      },
      {
        id: 8,
        titulo: "Análisis Numérico",
        descripcion: "Métodos numéricos para solución de problemas",
        vistas: 1900,
        nivel: "Avanzado",
        materia: "Matemáticas"
      }
    ];
  }

  // Obtener todos los cursos
  getAll() {
    return [...this.cursos];
  }

  // Obtener curso por ID
  getById(id) {
    const curso = this.cursos.find(c => c.id === id);
    if (!curso) {
      const error = new Error('Curso no encontrado');
      error.status = 404;
      throw error;
    }
    return curso;
  }

  // Crear nuevo curso
  create(curso) {
    const newCurso = {
      id: this.generateId(),
      ...curso
    };
    this.cursos.push(newCurso);
    return newCurso;
  }

  // Actualizar curso
  update(id, updates) {
    const index = this.cursos.findIndex(c => c.id === id);
    if (index === -1) {
      const error = new Error('Curso no encontrado');
      error.status = 404;
      throw error;
    }
    this.cursos[index] = { ...this.cursos[index], ...updates };
    return this.cursos[index];
  }

  // Eliminar curso
  delete(id) {
    const index = this.cursos.findIndex(c => c.id === id);
    if (index === -1) {
      const error = new Error('Curso no encontrado');
      error.status = 404;
      throw error;
    }
    const [deleted] = this.cursos.splice(index, 1);
    return deleted;
  }

  // Generar nuevo ID
  generateId() {
    return this.cursos.length > 0 ? 
      Math.max(...this.cursos.map(c => c.id)) + 1 : 
      1;
  }
}

export default new CursoModel();