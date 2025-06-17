# API de Gestión de Cursos

## Descripción
API RESTful para gestionar cursos con operaciones CRUD completas. Permite crear, leer, actualizar y eliminar cursos, además de ordenarlos por visitas y validar los datos de entrada. con Node.js y Express.

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución JavaScript
- **Express**: Framework para APIs REST
- **JavaScript ES6+**: Sintaxis moderna
- **Insomnia**: Cliente para pruebas de API

## Características Principales
- ✅ Operaciones CRUD completas (GET, POST, PUT, DELETE)
- ✅ Validación robusta de datos
- ✅ Ordenamiento por visitas (ascendente/descendente)
- ✅ Manejo profesional de errores
- ✅ Filtrado automático de cursos matemáticos
- ✅ Sin base de datos (almacenamiento en memoria)

## Instalación y Uso

### Prerequisitos
- Node.js v18+
- npm v9+

### Pasos de Instalación
1. Clonar el repositorio:
```bash
git clone https://github.com/Carloseduardo27/CRUD-cours.git
cd CRUD-cours
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor:
```bash
npm start
```

4. Verificar funcionamiento:
```bash
curl http://localhost:3000
# Deberías ver: "API de Cursos de Matemáticas - CRUD Completo"
```

## Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/cursos/matematica` | Obtener todos los cursos |
| POST | `/cursos/matematica` | Crear nuevo curso |
| GET | `/cursos/matematica/:id` | Obtener curso específico |
| PUT | `/cursos/matematica/:id` | Actualizar curso |
| DELETE | `/cursos/matematica/:id` | Eliminar curso |
| GET | `/cursos/matematica/orden/ascendente` | Cursos ordenados ascendente |
| GET | `/cursos/matematica/orden/descendente` | Cursos ordenados descendente |
| GET | `/cursos/matematica/niveles` | Niveles permitidos |

## Ejemplos de Uso

### Crear un nuevo curso (POST)
```bash
curl -X POST http://localhost:3000/cursos/matematica \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Ecuaciones Diferenciales",
    "descripcion": "Solución de ecuaciones diferenciales ordinarias",
    "vistas": 2500,
    "nivel": "Avanzado"
  }'
```

**Respuesta exitosa (201 Created):**
```json
{
  "id": 4,
  "titulo": "Ecuaciones Diferenciales",
  "descripcion": "Solución de ecuaciones diferenciales ordinarias",
  "vistas": 2500,
  "nivel": "Avanzado"
}
```

### Actualizar un curso (PUT)
```bash
curl -X PUT http://localhost:3000/cursos/matematica/4 \
  -H "Content-Type: application/json" \
  -d '{"vistas": 2800}'
```

### Obtener cursos ordenados (GET)
```bash
curl http://localhost:3000/cursos/matematica/orden/descendente
```

## Probar con Insomnia

Sigue estos pasos para probar la API con Insomnia:

1. **Crea una nueva colección** llamada "Cursos Matemáticas API"
2. **Agrega las siguientes solicitudes**:

### Solicitud 1: Obtener todos los cursos
- **Método**: GET
- **URL**: `http://localhost:3000/cursos/matematica`

### Solicitud 2: Crear nuevo curso
- **Método**: POST
- **URL**: `http://localhost:3000/cursos/matematica`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "titulo": "Probabilidad Básica",
  "descripcion": "Introducción a la teoría de probabilidades",
  "vistas": 1200,
  "nivel": "Intermedio"
}
```

### Solicitud 3: Actualizar curso
- **Método**: PUT
- **URL**: `http://localhost:3000/cursos/matematica/1`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "vistas": 1800
}
```

### Solicitud 4: Eliminar curso
- **Método**: DELETE
- **URL**: `http://localhost:3000/cursos/matematica/1`

### Solicitud 5: Probar validación (error)
- **Método**: POST
- **URL**: `http://localhost:3000/cursos/matematica`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "titulo": "A",
  "descripcion": "Corta",
  "vistas": -100,
  "nivel": "Fácil"
}
```

**Respuesta de error (400 Bad Request):**
```json
{
  "error": {
    "message": "Error de validación en los datos del curso",
    "detalles": {
      "titulo": "El título debe tener al menos 5 caracteres",
      "descripcion": "La descripción debe tener al menos 10 caracteres",
      "vistas": "Las vistas no pueden ser negativas",
      "nivel": "Nivel inválido. Valores permitidos: Principiante, Intermedio, Avanzado"
    }
  }
}
```

## Estructura del Proyecto
```
proyecto-cursos/
├── controllers/ # Lógica de controladores
├── middlewares/ # Middlewares personalizados
├── models/ # Modelos de datos
├── routes/ # Definición de rutas
├── utils/ # Funciones utilitarias
├── server.js # Punto de entrada
├── package.json # Dependencias
└── README.md # Este archivo
```

## Validación de Datos
La API valida todos los datos recibidos:

| Campo | Requerido | Tipo | Restricciones |
|--------------|-----------|-----------|----------------------------------------|
| `titulo` | Sí | String | Mínimo 5 caracteres |
| `descripcion`| Sí | String | Mínimo 10 caracteres |
| `vistas` | Sí | Integer | Número entero positivo |
| `nivel` | Sí | String | Principiante, Intermedio o Avanzado |

## Contribución
1. Haz fork del repositorio
2. Crea una rama: `git checkout -b mi-nueva-feature`
3. Haz commit de tus cambios: `git commit -m 'Agrega nueva feature'`
4. Haz push a la rama: `git push origin mi-nueva-feature`
5. Abre un Pull Request

## Authors

> [Carlos Perez] ([Carloseduardo27](https://github.com/Carloseduardo27))
> [] ([]())
> [] ([]())