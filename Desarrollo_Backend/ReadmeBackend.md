<div align="justify">

# Desarrollo Backend de la Plataforma "Bellas Artes"

### Se crearón dos carpetas para el proyecto:

| Carpetas      | Descripción                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **ProyectoX** | Tendrá el código, como es la conexión de base de datos, creación de rutas, controladores y el entorno de ejecución NodeJs. |
| **Pruebas**   | Se llevará a cabo imágenes como pruebas de recorrido al crear rutas de insertar, actualizar, encontrar y eliminar datos.   |

## Proyecto X

| Carpetas         | Descripción                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| **node_modules** | Contendrá los paquetes y funcionalidades para NodeJs.                                                             |
| **src**          | Tendra los archivos y carpetas para el funcionamiento de backend.                                                 |
| **controllers**  | Son archivos que son responsables de manejar las solicitudes del usuario y devolver las respuestas apropiadas..   |
| **models**       | Los modelos se utilizan a menudo en aplicaciones web para representar datos de usuarios, productos , entre otras. |
| **routes**       | Es una carpeta que contiene los archivos JavaScript que definen las rutas de la aplicación.                       |

| Archivos         | Descripción                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| **package.json** | Es un archivo de configuración que se utiliza en los proyectos de Node.js.                  |
| **.env**         | Es un archivo de configuración que se utiliza para almacenar variables de entorno.          |
| **app.js**       | Se encarga de importar middlewares, las rutas de solicutdes y enviarlas al archivo index.js |
| **db.js**        | Este archivo se encarga de conectar la base de datos con el entorno de ejecución NodeJs.    |
| **index.js.js**  | Con este archivo se arranca o enciende el Entorno de ejecución.                             |

| CarpetaControllers        | Descripción                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **personasControlles.js** | Se encarga de recibir la petición y enviar la solicitud a la base de datos o viceversa con la respuesta del usuario. |

| CarpetaModels         | Descripción                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| **personasModels.js** | Se encarga del modelado de datos que está definido en la base de datos. |

| CarpetaRoutes         | Descripción                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| **personasRoutes.js** | Este archivo es para crear rutas para distintas peticiones o solicitudes que requiere el usuario. |

## Paquetes para NodeJs del ProyectoX

Código ha utilizar durante el proyecto:

```bash
# Esto es para dependencias del proyectox
npm i express dotenv cors bcrypt
```

```bash
# Esto es para dependenciasde desarrollo del proyectox
npm i express nodemon prisma -D
```

```bash
# Esto es para dependencias para documentar el codigo del proyectox con swagger
npm i swagger-jsdoc swagger-ui-express
```

</div>
