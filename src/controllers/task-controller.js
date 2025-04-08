const { Task } = require('../models');

// Create Task
const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !status) {
      return res.status(400).json({
        success: false,
        message: 'Title and status are required',
      });
    }

    const task = await Task.create({
      title,
      description,
      status,
      user: req.userId,
    });

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Invalid task data',
    });
  }
};

// Get All Tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });

    res.status(200).json({
      success: true,
      message: 'Tasks retrieved successfully',
      data: tasks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not retrieve tasks',
    });
  }
};

// Update Task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.userId });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    const updatedFields = {
      title: req.body.title ?? task.title,
      description: req.body.description ?? task.description,
      status: req.body.status ?? task.status,
    };

    const updatedTask = await Task.findByIdAndUpdate(
      task._id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: updatedTask,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Invalid update request',
    });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error while deleting task',
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
