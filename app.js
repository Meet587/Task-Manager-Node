const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());
// app.use(notFound);
app.use(errorHandlerMiddleware);

app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 5000;

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
