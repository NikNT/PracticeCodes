const getNotes = async (req, res) => {
  res.status(200).json({
    message: "Get All Task",
  });
};

const postNote = async (req, res) => {
  const { title, description } = req.body;
  res.status(200).json({
    title,
    description,
  });
};

module.exports = { getNotes, postNote };
