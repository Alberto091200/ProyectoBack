const mongoose = require("mongoose")
const { body } = require("express-validator")

const ejerciciosSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categorias: { type: mongoose.ObjectId, required: true, ref:"Categorias" },
  img: {type: String}
})

const Ejercicios = mongoose.model("Ejercicios", ejerciciosSchema)

const ejerciciosValidation = [
  body("title").notEmpty(),
  body("categorias").notEmpty(),
]

exports.Ejercicios = Ejercicios
exports.ejerciciosValidation = ejerciciosValidation
