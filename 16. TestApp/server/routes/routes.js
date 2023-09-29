import express from "express";
const router = express.Router();
import {
  getAllTasks,
  postTask,
  deleteTask,
  updateTasks,
} from "../controllers/controllers.js";

router.get("/", getAllTasks);
router.post("/", postTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTasks);

export default router;
