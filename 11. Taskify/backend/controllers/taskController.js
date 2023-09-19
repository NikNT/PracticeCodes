// GET Tasks

const mongoose = require("mongoose");
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

const deleteTask = async (req, res) => {
  const { id } = req.params;

  //Check whether ID is valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Invalid Workout ID",
    });
  }

  const task = await Tasks.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).json({
      error: "No such task",
    });
  }

  res.status(200).json(task);
};

const updateTasks = async (req, res) => {
  const { id } = req.params;

  console.log("ID and Body :", req.params.id, req.body);

  const task = await Tasks.findOneAndUpdate(
    {
      _id: id,
    },
    { ...req.body },
    { new: true }
  );

  res.status(200).json(task);
};

module.exports = {
  getTasks,
  postTasks,
  deleteTask,
  updateTasks,
};
