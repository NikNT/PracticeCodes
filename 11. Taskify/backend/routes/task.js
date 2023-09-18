const express = require("express");
const router = express.Router();
const {
  getTasks,
  postTasks,
  deleteTask,
} = require("../controllers/taskController");

// GET all Tasks
router.get("/", getTasks);
// POST Tasks
router.post("/", postTasks);
// DELETE Tasks
router.delete("/:id", deleteTask);

module.exports = router;
