const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware

app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.get("/hello", (req, res) => {
  res.status(200).send("Hello World");
});

const port = 3000;

app.listen(port, () => {
  console.log(`app is listning on port ${port}...`);
});
