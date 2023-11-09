const { Ejercicio } = require('../models/ejercicios')

const getById = async (req, res) => {
	const ejercicio = await Ejercicio.findById(req.params.ejercicioId).populate('ejercicios')

	res.json(ejercicio)
}

const create = async (req, res) => {
	console.log(req.user)
	const newEjercicio = await Ejercicio.create(req.body)

	res.json(newEjercicio)
}

const update = async (req, res) => {
	const ejercicio = await Ejercicio.findByIdAndUpdate(req.params.ejercicioId, req.body, {
		new: true,
	})

	res.json(ejercicio)
}

const remove = async (req, res) => {
	const ejercicio = await Ejercicio.findByIdAndDelete(req.params.ejercicioId)

	res.json(ejercicio)
}

module.exports = {
	getById,
	create,
	update,
	remove,
}
