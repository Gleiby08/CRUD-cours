class CursoModel {
  constructor() {
    this.cursos = [
      {
        id: 1,
        titulo: 'Álgebra Lineal',
        descripcion: 'Vectores, matrices y transformaciones lineales',
        vistas: 1500,
        nivel: 'Intermedio',
      },
      {
        id: 2,
        titulo: 'Cálculo Diferencial',
        descripcion: 'Límites y derivadas aplicados',
        vistas: 3200,
        nivel: 'Avanzado',
      },
      {
        id: 3,
        titulo: 'Geometría Básica',
        descripcion: 'Fundamentos de geometría euclidiana',
        vistas: 800,
        nivel: 'Principiante',
      },
    ];
  }

  // Obtener todos los cursos
  getAll() {
    return [...this.cursos];
  }

  // Obtener curso por ID
  getById(id) {
    const curso = this.cursos.find((c) => c.id === id);
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
      ...curso,
    };
    this.cursos.push(newCurso);
    return newCurso;
  }

  // Actualizar curso
  update(id, updates) {
    const index = this.cursos.findIndex((c) => c.id === id);
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
    const index = this.cursos.findIndex((c) => c.id === id);
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
    return this.cursos.length > 0
      ? Math.max(...this.cursos.map((c) => c.id)) + 1
      : 1;
  }
}

export default new CursoModel();
