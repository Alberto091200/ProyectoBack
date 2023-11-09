const mongoose = require("mongoose")
const { body } = require("express-validator")

const categoriasSchema = new mongoose.Schema({
  title: { type: String, required: true }
})

const Categorias = mongoose.model("Categorias", categoriasSchema)

const categoriaValidation = 
  body("title").notEmpty()


exports.Categorias = Categorias
exports.categoriaValidation = categoriaValidation
