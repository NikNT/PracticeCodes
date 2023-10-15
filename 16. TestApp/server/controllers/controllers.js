import model from "../models/taskModel.js";

export const getAllTasks = async (req, res) => {
  const getTasks = await model.find({}).sort({ createdAt: -1 }).limit(2); //Mongo
  res.status(200).json(getTasks);
};

export const postTask = async (req, res) => {
  const { title, description } = req.body;

  // INSERT title, description into TABLE;
  const data = await model.create({
    title,
    description,
  });

  res.status(200).json(data);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await model.findOneAndDelete({ _id: id });
  res.status(200).json(task);
};

export const updateTasks = async (req, res) => {
  const { id } = req.params;

  // console.log("ID and Body :", req.params.id, req.body);

  const task = await model.findOneAndUpdate(
    {
      _id: id,
    },
    { ...req.body },
    { new: true }
  );

  res.status(200).json(task);
};
