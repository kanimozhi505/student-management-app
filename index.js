const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Student-Management-App");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
let students = [
  { id: 1, name: "Arun", dept: "CSE", age: 22 },
  { id: 2, name: "Karthik Kumar", dept: "CSE", age: 23 }
];
app.get("/students", (req, res) => {
  res.json(students);
});
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    dept: req.body.dept,
    age: req.body.age
  };

  students.push(newStudent);
  res.json(newStudent);
});



