const express = require('express');
const app = express();

app.use(express.json());

// Import router
const tasksRouter = require('./routes/tasks');

// Use router
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
 res.json({ message: "Welcome from MAIN branch" });
});

app.listen(3000, () => console.log("API running on port 3000"));