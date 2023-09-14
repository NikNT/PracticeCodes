const express = require("express");
const router = express.Router();
const { getTasks, postTasks } = require("../controllers/taskController");

// GET all workouts
router.get("/", getTasks);
// POST workout
router.post("/", postTasks);

module.exports = router;
