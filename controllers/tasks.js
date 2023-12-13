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
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task found with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    console.log(req.body, taskId);
    const task = await Task.findOneAndUpdate({ id: taskId }, req.body);
    if (!task) {
      return res.status(404).json({ msg: `no task found with id ${taskId}` });
    }
    res.status(200).json({ id: taskId, data: req.body });
  } catch (error) {
    console.log(msg);
    res.status(500).json({ msg: error });
  }
  // res.status(200).json({ id: req.params.id, data: req.body });
};

module.exports = { getTask, createTask, getAllTask, updateTask, deleteTask };
