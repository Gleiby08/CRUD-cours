export const validateId = (req, res, next) => {
  const id = req.params.id;

  if (!/^\d+$/.test(id)) {
    const error = new Error('ID inválido: debe ser un número entero positivo');
    error.status = 400;
    return next(error);
  }

  req.params.id = parseInt(id, 10);
  next();
};

