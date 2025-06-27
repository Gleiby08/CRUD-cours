class CursoIdiomasModel {
  constructor() {
    this.cursos = [
      {
        id: 1,
        titulo: 'Inglés Básico',
        descripcion: 'Curso introductorio de inglés para principiantes',
        vistas: 2500,
        nivel: 'Principiante',
        idioma: 'Inglés',
        
      },
      {
        id: 2,
        titulo: 'Español Intermedio',
        descripcion: 'Mejora tu español con conversación y gramática',
        vistas: 1800,
        nivel: 'Intermedio',
        idioma: 'Español',
        
      },
      {
        id: 3,
        titulo: 'Francés Avanzado',
        descripcion: 'Dominio completo del francés para comunicación profesional',
        vistas: 1200,
        nivel: 'Avanzado',
        idioma: 'Francés',
        
      },
      {
        id: 4,
        titulo: 'Alemán Conversacional',
        descripcion: 'Curso enfocado en comunicación oral y cotidiana',
        vistas: 950,
        nivel: 'Intermedio',
        idioma: 'Alemán',
       
      }
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
      // Valores por defecto
      vistas: 0,
      certificacion: curso.certificacion || false
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

  // Filtrar cursos por nivel
  filtrarPorNivel(nivel) {
    return this.cursos.filter((curso) => curso.nivel === nivel);
  }

  // Filtrar cursos por idioma
  filtrarPorIdioma(idioma) {
    return this.cursos.filter((curso) => 
      curso.idioma.toLowerCase() === idioma.toLowerCase()
    );
  }

  // Obtener cursos con certificación
  getCursosConCertificacion() {
    return this.cursos.filter((curso) => curso.certificacion);
  }

  // Generar nuevo ID
  generateId() {
    return this.cursos.length > 0
      ? Math.max(...this.cursos.map((c) => c.id)) + 1
      : 1;
  }
}

export default new CursoIdiomasModel();
