const express = require('express')
const router = express.Router()
const  todoController = require('../controller')


router.get('/', todoController.getChores)
router.post('/', todoController.createChore)
router.put('/:id', todoController.updateChore)
router.delete('/:id', todoController.deleteChore)

module.exports = router