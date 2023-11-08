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

## PERFECTO

POST /login  
POST /register

## NO ES NECESARIO

DELETE /logout

En un sistema basado en tokens esta funcionalidad se implementa en el lado del cliente, borrando el token del almacenamiento local del browser

## PERFECTO

GET /categorias ==Users==

## DEJA PARA BONUS EL FILTRO

Configuras el controllador de esta ruta para esperar por query params valores de genero que recibes y configuras para la consulta

GET /categorias?genre=pecho&genre=espalda
GET /categorias?genre=id&genre=id

req.query = {
genre: ["pecho", "espalda"]
}

GET /categorias/:categoriaId ==Users==

## Esta funcionalidad ya te la da el anterior que traería todos los ejericios de la categoria de la :categoryId pasada

GET /categorias/:categoriaId/ejercicios==Users==

## PERFECTO

POST /categorias ==admin==  
PUT /categorias/:categoriaId ==admin==  
DELETE /categorias/:categoriasId ==admin==

###  Aqui lo que quieres es implementar el crud para recursos de tipo ejercicio

## Cuando haces un POST, le estás diciendo al server que quieres crear un nuevo recurso del que estás especificando en el endpoint (categorias). Tu aqui quieres crear un nuevo ejercicio, además si quisieses crear un recurso no tienes que identificar el recurso que vas a crear porque todavia ni existe ni tiene id. Como haces arriba con el post de categorias. Simplemnte verbo y path indica al server lo que quieres hacer. Crear un recurso de un tipo de recurso. POST /categorias. Pasarias la informacion de la nueva categoria por body pero no una id de esa categoria.

POST /categorias/:categoriaId/:ejerciciosId ==admin==

POST /ejercicios

body: {
"idcategoria": "",
"titulo": "pressbanca",
"imagen": "press.jpg"
}

Por norma general todo lo que en un cliente final pondrías en un formulario se pasa por body.

## Los siguientes si necesitan identificar el recurso porque ya existe y lo quieres modificar o borrar. Y los endpoints deben reflejar que haces verbo y recurso. Modificar un ejercicio PUT /ejercicios.... DELETE /ejercicios....

PUT /categorias/:categoriaId/:ejerciciosId ==admin==
DELETE /categorias/:categoriasId/:ejerciciosId ==admin==

categorias
ejercicios: [idejercicios]
ejercicios
categoria: idcategoria

User.find().populate(moviesFavorites)

Colecciones y schemas
