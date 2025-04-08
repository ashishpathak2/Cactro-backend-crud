const express = require('express');
const router = express.Router();
const { InfoController } = require('../../controllers');
const authRoutes = require('./auth-routes');
const taskRoutes = require('./task-routes');

//test route
router.get('/info', InfoController.info);

// Importing the routes for authentication and tasks
router.use('/auth', authRoutes);
router.use('/task', taskRoutes);

module.exports = router;