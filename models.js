import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, required:true },
  priority: { type: String,required:true},
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);
export default Task;