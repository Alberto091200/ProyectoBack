const { Categoria } = require("../models/categorias")

const create = async (req, res) => {
  const newCategoria = await Categoria.create(req.body)
  console.log(req.body)

  res.json(newCategoria)
}

const getAll = async (req, res) => {
  const categorias = await Categoria.find()

  res.json(categorias)
}

const update = async (req, res) => {
  const categoria = await Categoria.findByIdAndUpdate(req.params.categoriaId, req.body, {
    new: true,
  })

  res.json(categoria)
}

const remove = async (req, res) => {
  const categoria = await Categoria.findByIdAndDelete(req.params.categoriaId)

  if (!categoria) return res.status(404).json({ msg: "Categoria no existe" })

  res.json(categoria)
}

module.exports = {
  create,
  getAll,
  update,
  remove,
}
