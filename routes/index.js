const router = require('express').Router();
const schemaHandler = require('../handlers/schemas');
const validationHandler = require('../handlers/validations');

router.get('/schemas', schemaHandler.getAll);
router.get('/schemas/:schemaName', schemaHandler.getOne);
router.put('/validations/:schemaName', validationHandler.validate);

module.exports = router;