const Note = require("../model/notesModel");

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    console.error("Error fetching notes: ", err);
  }
};

const postNote = async (req, res) => {
  const { title, description } = req.body;
  try {
    const note = await Note.create({
      title,
      description,
    });
    res.status(200).json(note);
  } catch (err) {
    console.log("Error posting note: ", err);
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findOneAndDelete({ _id: id });
    res.status(200).json(note);
  } catch (err) {
    console.error("Error deleting note: ", err);
  }
};

module.exports = { getNotes, postNote, deleteNote };
