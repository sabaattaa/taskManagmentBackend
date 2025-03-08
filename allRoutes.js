import { Router } from "express";
import Task from "./models.js";

const router = Router();

// ✅ **Get All Tasks**
router.get("/getTask", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ status: "Success", tasks });
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message });
  }
});

// ✅ **Create a New Task**
router.post("/createTask", async (req, res) => {
  try {
    const { title, description, priority,status } = req.body;
    const newTask = new Task({ title, description,priority,status });
    await newTask.save();
    res.status(201).json({ status: "Success", task: newTask });
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message });
  }
});

// ✅ **Delete Task by ID**
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ status: "Error", message: "Task not found" });
    }
    res.json({ status: "Success", message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message });
  }
});

// ✅ **Update Task by ID**
router.patch("/editTask/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ status: "Error", message: "Task not found" });
    }
    res.json({ status: "Success", task: updatedTask });
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message });
  }
});

export default router;
