const express = require('express');
const router = express.Router();
const { AuthMiddleware } = require('../../middlewares');
const { TaskController } = require('../../controllers');


router.post('/', AuthMiddleware.isAuthenticated, TaskController.createTask);
router.get('/', AuthMiddleware.isAuthenticated, TaskController.getTasks);
router.put('/:id', AuthMiddleware.isAuthenticated, TaskController.updateTask);
router.delete('/:id', AuthMiddleware.isAuthenticated, TaskController.deleteTask);

module.exports = router;
