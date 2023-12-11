const express = require("express");
const router = express.Router();

const {
  getTask,
  createTask,
  getAllTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// router.get("/", getTask);
// router.post("/", createTask);
// router.put("/", updateTask);
// router.delete("/", deleteTask);

router.route("/").get(getAllTask).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
