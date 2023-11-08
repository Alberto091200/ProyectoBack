const mongoose = require("mongoose")
const { body } = require("express-validator")

const categoriasSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categorias: [{ type: mongooseId, ref: "Categorias" }],
})

const Categorias = mongoose.model("Categorias", categoriasSchema)

const categoriaValidation = [
  body("title").notEmpty(),
  body("categorias").isArray(),
]

exports.Categorias = Categorias
exports.categoriasSchema = categoriaValidation
