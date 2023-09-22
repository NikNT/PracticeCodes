const express = require("express");
const router = express.Router();
const {
  getNotes,
  postNote,
  deleteNote,
} = require("../controllers/notesController");

router.get("/", getNotes);
router.post("/", postNote);
router.delete("/:id", deleteNote);

module.exports = router;
