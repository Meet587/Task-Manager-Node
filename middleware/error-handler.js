const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ msg: "somthing went wrong" });
};

module.exports = errorHandlerMiddleware;
