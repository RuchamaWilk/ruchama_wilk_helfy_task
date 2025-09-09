const express = require('express');
const router = express.Router();
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../model/task');


router.get('/', async (req, res, next) => {
    try {
        return res.status(200).send(getTasks());
    } catch (err) {
        next(err); 
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newTask = createTask(req.body);
        return res.status(200).send(newTask);
    } catch (err) {
        next(err); 
    }
});

router.get('/:id', (req, res) => {
    try {
        const id= req.params.id;
        const task = getTaskById(id);
        return res.status(200).send(task);
    }catch (err) {
        next(err); 
    }
    
  });

  router.put('/:id', (req, res) => {
    try {
        const toChange= req.body;
        const id= Number(req.params.id)
        const updated = updateTask(id, toChange);
        return res.status(200).send(updated);
    }
    catch (err) {
        next(err); 
    }
  });

  router.delete('/:id', (req, res) => {
    try {
    id= Number(req.params.id)
    const deleted = deleteTask(id);
    return res.status(200).send(deleted);
    }
    catch (err) {
        next(err); 
    }
  });




module.exports = router;
