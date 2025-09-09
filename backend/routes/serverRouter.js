const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.use('/tasks', tasksController);

router.use((req, res, next) => {
    return res.status(404).send('Route Not Found');
});

module.exports = router;
