console.log("Welcome to CAP training");
console.log("Thank You");

const express = require("express");
const dayjs = require("dayjs");
const { getUsersPromise } = require("./taskManager");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  const date = dayjs().format('YYYY-MM-DD');
  res.send(`Current Date & Time: ${date}`);
});

app.get("/tasks", async (req, res) => {
  try {
    const users = await getUsersPromise();
    // res.json(users);
    res.send(users);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`);
});