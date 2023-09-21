const express = require("express");
const router = express.Router();
const { getNotes, postNote } = require("../controllers/notesController");

router.get("/", getNotes);
router.post("/", postNote);

module.exports = router;
