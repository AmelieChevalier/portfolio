const clientsController = require('../controllers/client.controller.js');
const router = require('express').Router();

router.post('/', clientsController.create);
router.get('/', clientsController.findAll);
router.get('/:id', clientsController.findOne);
router.put('/:id', clientsController.update);
router.delete('/:id', clientsController.delete);

module.exports = router;