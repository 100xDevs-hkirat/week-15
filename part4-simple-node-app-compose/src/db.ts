import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String
});

export const Course = mongoose.model('Course', courseSchema);

