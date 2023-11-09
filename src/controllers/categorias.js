const {  Categorias } = require("../models/categorias")

const create = async (req, res) => {
  const newCategoria = await Categorias.create(req.body)

  res.json(newCategoria)
}

const getAll = async (req, res) => {
  const categorias = await Categorias.find()

  res.json(categorias)
}

const update = async (req, res) => {
  const categoria = await Categorias.findByIdAndUpdate(req.params.categoriaId, req.body, {
    new: true,
  })

  res.json(categoria)
}

const remove = async (req, res) => {
  console.log(req.params.categoriaId)
  const categoria = await Categorias.findByIdAndDelete(req.params.categoriaId)

  if (!categoria) return res.status(404).json({ msg: "Categoria no existe" })

  res.json(categoria)
}

module.exports = {
  create,
  getAll,
  update,
  remove,
}
