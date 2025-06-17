export const validateId = (req, res, next) => {
  const id = req.params.id;

  // Verificar que el ID sea un número entero positivo
  if (!/^\d+$/.test(id)) {
    const error = new Error('ID inválido: debe ser un número entero positivo');
    error.status = 400;
    return next(error);
  }

  // Convertir a número y adjuntar al request
  req.params.id = parseInt(id, 10);
  next();
};
