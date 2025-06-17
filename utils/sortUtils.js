// Ordenar cursos por vistas ascendente
export function sortByViewsAscending(cursos) {
  return [...cursos].sort((a, b) => a.vistas - b.vistas);
}

// Ordenar cursos por vistas descendente
export function sortByViewsDescending(cursos) {
  return [...cursos].sort((a, b) => b.vistas - a.vistas);
}
