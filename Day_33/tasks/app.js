const mongoose = require('mongoose');

// Step 1: Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/schoolDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log(" MongoDB Connected"))
.catch(err => console.error("Connection Error:", err));


// Step 2: Define Schema and Model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  isActive: Boolean
});

const Student = mongoose.model('Student', studentSchema);


// Step 3: CRUD Functions

// CREATE
const createStudent = async () => {
  const student = new Student({
    name: "Nathiya",
    age: 21,
    course: "MERN",
    isActive: true
  });
  await student.save();
  console.log(" Student Created:", student);
};

// READ
const readStudents = async () => {
  const students = await Student.find();
  console.log(" All Students:", students);
};

// UPDATE
const updateStudent = async () => {
  const result = await Student.updateOne(
    { name: "Nathiya" },
    { $set: { course: "Full Stack Developer" } }
  );
  console.log("Update Result:", result);
};

// DELETE
const deleteStudent = async () => {
  const result = await Student.deleteOne({ name: "Nathiya" });
  console.log("Delete Result:", result);
};

// Step 4: Execute All
const run = async () => {
  await createStudent();
  await readStudents();
  await updateStudent();
  await readStudents();
  await deleteStudent();
  await readStudents();

  // Close the connection at the end
  mongoose.connection.close();
};

run();

