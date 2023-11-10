const { Ejercicios } = require('../models/ejercicios')

const getAll = async (req, res) => {
	const ejercicios = await Ejercicios.find()
  
	res.json(ejercicios)
  }

const create = async (req, res) => {
	const newEjercicio = await Ejercicios.create(req.body)

	res.json(newEjercicio)
}

const update = async (req, res) => {
	const ejercicio = await Ejercicios.findByIdAndUpdate(req.params.ejercicioId, req.body, {
		new: true,
	})

	res.json(ejercicio)
}

const remove = async (req, res) => {
	const ejercicio = await Ejercicios.findByIdAndDelete(req.params.ejercicioId)

	res.json(ejercicio)
}

module.exports = {
	getAll,
	create,
	update,
	remove,
}
