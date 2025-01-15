import Task from '../models/Task.js';


// Create task
export async function createTask(req, res) {
    try {
        await Task.create({ ...req.body, userId: req.user.id });
        res.status(201).json({ message: "Task Created Successfuly" });
    } catch (err) {
        res.status(400).json({ message: 'Task create failed', error: err.message });
    }
}


// Get all task
export async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get tasks', error: err.message });
    }
}


// update task
export async function updateTask(req, res) {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id, userId: req.user.id }, req.body, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: 'Update failed', error: err.message });
    }
}


// Delete task
export async function deleteTask(req, res) {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Delete failed', error: err.message });
    }
}
