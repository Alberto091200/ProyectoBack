const { ejerciciosValidation } = require('../models/ejercicios')
const ejerciciosController = require('../controllers/ejercicios')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const validate = require('../middlewares/validate')

const { Router } = require('express')

const router = Router()

const { query } = require('express-validator')

router.get(
	'/categoria/:categoriaId/:ejercicioId',
	mongoIdFromParamValidation('ejercicioId'),
	ejerciciosController.getById
)

router.post('/ejercicios', auth, ejerciciosValidation, validate, ejerciciosController.create)
router.put(
	'/categoria/:categoriaId/:ejercicioId',
	auth,
	mongoIdFromParamValidation('ejercicioId'),
	ejerciciosValidation,
	validate,
	ejerciciosController.update
)
router.delete(
	'/categoria/:categoriaId/:ejercicioId',
	auth,
	admin,
	mongoIdFromParamValidation('ejercicioId'),
	ejerciciosController.remove
)

module.exports = router
