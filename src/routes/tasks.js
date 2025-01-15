import express from 'express';
import { createTask, getAllTasks, updateTask, deleteTask } from '../controllers/taskController.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.use(auth);
router.post('/', createTask);
router.get('/', getAllTasks);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;