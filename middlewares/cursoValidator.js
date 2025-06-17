const nivelesPermitidos = ['Principiante', 'Intermedio', 'Avanzado'];

export const validateCurso = (isCreation) => (req, res, next) => {
  const curso = isCreation ? req.body : { ...req.body, id: req.params.id };
  const errors = {};

  // Validar título
  if (!curso.titulo || curso.titulo.trim() === '') {
    errors.titulo = 'El título es obligatorio';
  } else if (curso.titulo.length < 5) {
    errors.titulo = 'El título debe tener al menos 5 caracteres';
  }

  // Validar descripción
  if (!curso.descripcion || curso.descripcion.trim() === '') {
    errors.descripcion = 'La descripción es obligatoria';
  } else if (curso.descripcion.length < 10) {
    errors.descripcion = 'La descripción debe tener al menos 10 caracteres';
  }

  // Validar vistas
  if (curso.vistas === undefined || curso.vistas === null) {
    errors.vistas = 'Las vistas son obligatorias';
  } else if (
    typeof curso.vistas !== 'number' ||
    !Number.isInteger(curso.vistas)
  ) {
    errors.vistas = 'Las vistas deben ser un número entero';
  } else if (curso.vistas < 0) {
    errors.vistas = 'Las vistas no pueden ser negativas';
  }

  // Validar nivel
  if (!curso.nivel) {
    errors.nivel = 'El nivel es obligatorio';
  } else if (!nivelesPermitidos.includes(curso.nivel)) {
    errors.nivel = `Nivel inválido. Valores permitidos: ${nivelesPermitidos.join(
      ', '
    )}`;
  }

  // Validar materia
  if (!curso.materia || curso.materia.trim() === '') {
    errors.materia = 'La materia es obligatoria';
  } else if (curso.materia.length < 3) {
    errors.materia = 'La materia debe tener al menos 3 caracteres';
  }

  // Validación específica para actualización
  if (!isCreation) {
    if (curso.id === undefined || curso.id === null) {
      errors.id = 'El ID es obligatorio para actualización';
    } else if (typeof curso.id !== 'number' || !Number.isInteger(curso.id)) {
      errors.id = 'El ID debe ser un número entero';
    } else if (curso.id <= 0) {
      errors.id = 'ID inválido';
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      error: {
        message: 'Error de validación en los datos del curso',
        detalles: errors,
      },
    });
  }

  next();
};
