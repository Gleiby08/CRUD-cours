# API de Gestión de Cursos


## Descripción  
API RESTful para la gestión integral de cursos académicos de cualquier materia y permite crear cursos de cualquier disciplina académica. Ofrece operaciones CRUD completas con validación de datos, ordenamiento por visitas y manejo profesional de errores.

## Características Clave  
✅ **CRUD completo** para cualquier curso académico  
✅ **Ordenamiento** por número de visitas (ascendente/descendente)  
✅ **Validación robusta** de datos  
✅ **Manejo profesional** de errores  
✅ **Almacenamiento en memoria**  
✅ **Soporte para cualquier materia académica**  

## Tecnologías Utilizadas  
- **Node.js v18+**: Entorno de ejecución JavaScript  
- **Express.js**: Framework para APIs REST  
- **JavaScript ES6+**: Sintaxis moderna  
- **Insomnia**: Para pruebas de API  

## Estructura del Proyecto  
```
proyecto-cursos/
├── controllers/ # Lógica de controladores
│ └── cursoController.js
├── middlewares/ # Middlewares personalizados
│ ├── errorHandler.js
│ ├── idValidator.js
│ └── cursoValidator.js
├── models/ # Modelos de datos
│ └── cursoModel.js # Contiene 8 cursos de matemáticas predefinidos
├── routes/ # Definición de rutas
│ └── cursoRoutes.js
├── utils/ # Funciones utilitarias
│ └── sortUtils.js
├── server.js # Punto de entrada principal
├── package.json # Gestión de dependencias
└── README.md # Documentación
```

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
# Respuesta esperada: "API de Gestión de Cursos - CRUD Completo"
```

## Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/cursos` | Obtener todos los cursos |
| `POST` | `/cursos` | Crear nuevo curso |
| `GET` | `/cursos/:id` | Obtener curso por ID |
| `PUT` | `/cursos/:id` | Actualizar curso |
| `DELETE` | `/cursos/:id` | Eliminar curso |
| `GET` | `/cursos/orden/ascendente` | Cursos ordenados por visitas ascendente |
| `GET` | `/cursos/orden/descendente` | Cursos ordenados por visitas descendente |
| `GET` | `/cursos/niveles` | Obtener niveles permitidos |

## Cursos Predefinidos (Matemáticas)
La API incluye 8 cursos de matemáticas listos para usar:
1. Álgebra Lineal
2. Cálculo Diferencial
3. Cálculo Integral
4. Geometría Analítica
5. Ecuaciones Diferenciales
6. Probabilidad y Estadística
7. Matemáticas Discretas
8. Análisis Numérico

## Ejemplos de Uso

### Crear un nuevo curso de Física
```bash
POST /cursos
Content-Type: application/json

{
  "titulo": "Mecánica Cuántica",
  "descripcion": "Principios básicos de la física cuántica",
  "vistas": 2500,
  "nivel": "Avanzado",
  "materia": "Física"
}
```

### Actualizar las visitas de un curso
```bash
PUT /cursos/1
Content-Type: application/json

{
  "vistas": 1800
}
```

### Respuesta exitosa (200 OK)
```json
{
  "id": 1,
  "titulo": "Álgebra Lineal",
  "descripcion": "Vectores, matrices y transformaciones lineales",
  "vistas": 1800,
  "nivel": "Intermedio",
  "materia": "Matemáticas"
}
```

## Proceso Paso a Paso para Probar con Insomnia

### Paso 1: Instalar Insomnia
Descargar e instalar desde [https://insomnia.rest](https://insomnia.rest)

### Paso 2: Importar la colección de pruebas
1. Crear nuevo workspace llamado "Gestión de Cursos API"
2. Importar la siguiente colección:

```json
{
  "_type": "export",
  "__export_format": 4,
  "__export_source": "insomnia.desktop.app:v2023.5.8",
  "resources": [
    {
      "_id": "req_1",
      "name": "Obtener todos los cursos",
      "method": "GET",
      "url": "http://localhost:3000/cursos"
    },
    {
      "_id": "req_2",
      "name": "Crear curso de Física",
      "method": "POST",
      "url": "http://localhost:3000/cursos",
      "body": {
        "mimeType": "application/json",
        "text": "{\n \"titulo\": \"Mecánica Clásica\",\n \"descripcion\": \"Leyes de Newton y movimiento planetario\",\n \"vistas\": 2200,\n \"nivel\": \"Avanzado\",\n \"materia\": \"Física\"\n}"
      }
    },
    {
      "_id": "req_3",
      "name": "Obtener curso específico",
      "method": "GET",
      "url": "http://localhost:3000/cursos/1"
    },
    {
      "_id": "req_4",
      "name": "Actualizar curso",
      "method": "PUT",
      "url": "http://localhost:3000/cursos/1",
      "body": {
        "mimeType": "application/json",
        "text": "{\n \"vistas\": 1800\n}"
      }
    },
    {
      "_id": "req_5",
      "name": "Eliminar curso",
      "method": "DELETE",
      "url": "http://localhost:3000/cursos/9"
    },
    {
      "_id": "req_6",
      "name": "Cursos orden descendente",
      "method": "GET",
      "url": "http://localhost:3000/cursos/orden/descendente"
    },
    {
      "_id": "req_7",
      "name": "Prueba validación (error)",
      "method": "POST",
      "url": "http://localhost:3000/cursos",
      "body": {
        "mimeType": "application/json",
        "text": "{\n \"titulo\": \"EC\",\n \"descripcion\": \"Corta\",\n \"vistas\": -100,\n \"nivel\": \"Fácil\",\n \"materia\": \"\"\n}"
      }
    }
  ]
}
```

### Paso 3: Secuencia de pruebas recomendada

1. **Obtener todos los cursos**  
   - Verificar los 8 cursos de matemáticas predefinidos
   - Método: GET  
   - URL: `http://localhost:3000/cursos`

2. **Crear un nuevo curso de Física**  
   - Método: POST  
   - URL: `http://localhost:3000/cursos`  
   - Body (JSON):
     ```json
     {
       "titulo": "Termodinámica",
       "descripcion": "Leyes de la termodinámica y sus aplicaciones",
       "vistas": 1800,
       "nivel": "Avanzado",
       "materia": "Física"
     }
     ```

3. **Crear un nuevo curso de Literatura**  
   - Método: POST  
   - URL: `http://localhost:3000/cursos`  
   - Body (JSON):
     ```json
     {
       "titulo": "Literatura del Siglo de Oro",
       "descripcion": "Análisis de obras clásicas españolas",
       "vistas": 1200,
       "nivel": "Intermedio",
       "materia": "Literatura"
     }
     ```

4. **Actualizar un curso existente**  
   - Método: PUT  
   - URL: `http://localhost:3000/cursos/1`  
   - Body (JSON):
     ```json
     {
       "vistas": 2000
     }
     ```

5. **Obtener cursos ordenados por visitas**  
   - Método: GET  
   - URL: `http://localhost:3000/cursos/orden/descendente`

6. **Eliminar un curso**  
   - Método: DELETE  
   - URL: `http://localhost:3000/cursos/9` (ID del curso creado)

7. **Probar validaciones**  
   - Intentar crear un curso con datos inválidos
   - Verificar mensajes de error

### Paso 4: Probar validaciones
Intente crear un curso con datos incompletos o inválidos para ver los mensajes de error:

```json
{
  "titulo": "EC",
  "descripcion": "Corta",
  "vistas": -100,
  "nivel": "Fácil",
  "materia": ""
}
```

**Respuesta de error esperada (400 Bad Request):**
```json
{
  "error": {
    "message": "Error de validación en los datos del curso",
    "detalles": {
      "titulo": "El título debe tener al menos 5 caracteres",
      "descripcion": "La descripción debe tener al menos 10 caracteres",
      "vistas": "Las vistas no pueden ser negativas",
      "nivel": "Nivel inválido. Valores permitidos: Principiante, Intermedio, Avanzado",
      "materia": "La materia es obligatoria"
    }
  }
}
```

## Validación de Datos  
Todos los cursos deben cumplir con estas reglas:

| Campo | Requerido | Tipo | Restricciones |
|--------------|-----------|-----------|----------------------------------------|
| `titulo` | Sí | String | Mínimo 5 caracteres |
| `descripcion`| Sí | String | Mínimo 10 caracteres |
| `vistas` | Sí | Integer | Número entero positivo |
| `nivel` | Sí | String | Valores: Principiante, Intermedio, Avanzado |
| `materia` | Sí | String | Mínimo 3 caracteres |

## Cómo Contribuir  
1. Haz fork del repositorio  
2. Crea tu rama: `git checkout -b mi-nueva-feature`  
3. Realiza tus cambios y commitea: `git commit -m 'Agrega nueva feature'`  
4. Haz push a la rama: `git push origin mi-nueva-feature`  
5. Abre un Pull Request en GitHub  

**Recomendaciones:**  
- Mantén el estilo de código consistente  
- Añade pruebas para nuevas funcionalidades  
- Documenta los cambios importantes  



## Authors

> [Carlos Perez] ([Carloseduardo27](https://github.com/Carloseduardo27))
> [] ([]())
> [] ([]())

