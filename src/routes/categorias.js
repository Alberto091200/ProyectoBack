const { categoriaValidation } = require('../models/categorias')
const categoriaController = require('../controllers/categorias')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')
const validate = require('../middlewares/validate')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const { Router } = require('express')

const router = Router()

router.get('/', auth, categoriaController.getAll)

router.post('/', auth, categoriaValidation, validate, categoriaController.create)

router.put(
	'/:categoriaId',
	auth,
	admin,
	mongoIdFromParamValidation('categoriaId'),
	categoriaValidation,
	validate,
	categoriaController.update
)

router.delete(
	'/:categoriaId',
	auth,
	admin,
	mongoIdFromParamValidation('categoriaId'),
	validate,
	categoriaController.remove
) 

module.exports = router
