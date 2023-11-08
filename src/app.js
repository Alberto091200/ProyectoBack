require("dotenv").config()
const express = require("express")

const app = express()

const port = process.env.PORT || 3000

require("./startup/db")()
require("./startup/routes")(app)

const categorias = []

app.get("/categorias", (req, res) => {
  res.send(categorias)
})

app.get("/categorias/:categoriaId", (req, res) => {
  const categoria = {}
  res.send(categoria)
})

app.post("/categorias", (req, res) => {})
app.put("/categorias/:categoriaId", (req, res) => {})
app.delete("/categorias/:categoriaId", (req, res) => {})
app.post("/ejercicios", (req, res) => {})
app.put("/categorias/:categoriaId/:ejerciciosId", (req, res) => {})
app.delete("/categorias/:categoriasId/:ejerciciosId", (req, res) => {})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
