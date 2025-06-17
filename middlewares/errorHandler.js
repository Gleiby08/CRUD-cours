const errorHandler = (err, req, res, next) => {
  // Establecer código de estado predeterminado
  const statusCode = err.status || 500;

  // Registrar el error
  console.error(
    `[${new Date().toISOString()}] Error ${statusCode}: ${err.message}`
  );
  if (err.stack && process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  // Respuesta al cliente
  res.status(statusCode).json({
    error: {
      status: statusCode,
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
};

export default errorHandler;
