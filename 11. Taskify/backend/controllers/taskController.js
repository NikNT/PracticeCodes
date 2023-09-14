// GET Tasks

const Tasks = require("../models/taskModel");

const getTasks = async (req, res) => {
  const tasks = await Tasks.find({}).sort({ createdAt: -1 });
  return res.status(200).json(tasks);
};

// POST Tasks

const postTasks = async (req, res) => {
  const { title, description } = req.body;

  // add task to db

  try {
    const task = await Tasks.create({
      title,
      description,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getTasks,
  postTasks,
};
