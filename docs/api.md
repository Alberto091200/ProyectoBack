## Diseño api-CrossFit

### Descripcion de proyecto

Dentro de la aplicación hay dos tipos de usuarios, de los cuales uno es el usuario "normal" y el entrenador que es el "admin", el cuál es el que tiene privilegios en la aplicacion y puede modificarla

---Usuario normal---

La aplicación permite al usuario ver el listado de categorias con sus respectivos ejercicios con titulo y alguna imagen/video de referecia.

Al pulsar en una de esas categorias, entras, y puedes ver los ejecicios relacionados con la categoria

Habra un buscador para seleccionar la categoria de ejercicio que quieras

---Entrandor (Admin)---

Pueden acceder a lo mismo que el usuario normal, pero en la pagina principal pueden gestionar las categorias a traves de un boton, al darle aparecen unos iconos en sus respectivos sitios, de los cuales sirven para borrar una categoria completa o modificar esta misma, además de poder añardir estas mismas.

Una vez se abre la categoria habrá dentro de esta sus respectivos ejercicios de los cuales los podrá borrar y modificar de la misma manera anterior mencionada.

## WIREFRAME MID-FI

DONE

## API DESIGN

POST /login
POST /register
DELETE /logout

GET /categorias ==Users==
GET /categorias/:categoriaId ==Users==
GET /categorias/:categoriaId/ejercicios==Users==

POST /categorias ==admin==
POST /categorias/:categoriaId/:ejerciciosId ==admin==
PUT /categorias/:categoriaId ==admin==
PUT /categorias/:categoriaId/:ejerciciosId ==admin==

DELETE /categorias/:categoriasId ==admin==
DELETE /categorias/:categoriasId/:ejerciciosId ==admin==
