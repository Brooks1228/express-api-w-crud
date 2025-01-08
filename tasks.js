// express init
const express = require("express");

const app = express();

// middleware
app.use(express.json());

// data
let tasks = [
  { id: 1, description: "learn express", completed: true },
  {
    id: 2,
    description: "build a basic express api with crud",
    completed: false,
  },
];

// port
const PORT = 3001;
// had to make port 3001 cause someone is logged in and i got an error with 3000

// routes

// get route for all the tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// get route for a specific id
app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "your task wasnt found" });
  }
});

// post route to add a new task
app.post("/tasks", (req, res) => {
  const newId =
    tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
  const newTask = {
    id: newId,
    description: req.body.description ? req.body.description : "",
    completed: req.body.completed ? req.body.completed : false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// put route for updating a task based on its id
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (task) {
    let updated = false;
    console.log(req.body);
    if (req.body.description) {
      task.description = req.body.description;
      updated = true;
    }
    if (req.body.completed) {
      task.completed = req.body.completed;
      updated = true;
    }
    if (updated) {
      res.json(task);
    } else {
      res.status(400).json({ message: "no changes were made" });
    }
  } else {
    res.status(404).json({ message: "your task wasnt found" });
  }
});

// delete route for deleting an item by its id
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask);
  } else {
    res.status(404).json({ message: "your task wasnt found" });
  }
});

app.listen(PORT, () => {
  console.log(`now running server on http://localhost:${PORT}`);
});
