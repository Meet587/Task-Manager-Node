const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();

// middleware

app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

const port = 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listning on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
