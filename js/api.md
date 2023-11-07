## Diseño api-movies

### Descripcion de proyecto

La aplicación permite al usuario ver el listado de categorias con sus respectivos ejercicios con titulo y alguna imagen/video de referecia.

Al pulsar en una de esas categorias, entras, y puedes ver los ejecicios relacionados con la categoria

Habra un buscador para seleccionar la categoria de ejercicio que quieras

Los usuarios autenticados pueden ser de rol:

- Users: Acceden a todos los listados
- Administradores: Pueden acceder a lo mismo que "Users" pero además puede crear/ediar/borrar categorias y los ejercicios

## WIREFRAME MID-FI

DONE

## API DESIGN

POST /login
POST /register
DELETE /logout

GET /categorias ==Users==
GET /categorias/:categoriaId ==Users==
GET /categorias/:categoriaId/:ejercicioId ==Users==
