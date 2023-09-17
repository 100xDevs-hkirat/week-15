import 'dotenv/config';
import mongoose from "mongoose";
import express from "express";
import { Course } from "./db";

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const newCourse = new Course({
      title: 'Sample Course',
      description: 'This is a sample course description.'
    });

    const result = await newCourse.save();

    res.send('Course added to the database with ID: ' + result._id);
  } catch (error) {
    res.status(500).send('Failed to add course');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL || "", { dbName: "courses"});

