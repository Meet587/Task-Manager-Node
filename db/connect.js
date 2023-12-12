const mongoos = require("mongoose");

const connectDb = (uri) => {
  return mongoos.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
