const Task = require("../models/Task");
const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send(`get all task`);
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task found with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.json({ id: req.params.id });
};
const deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = { getTask, createTask, getAllTask, updateTask, deleteTask };
