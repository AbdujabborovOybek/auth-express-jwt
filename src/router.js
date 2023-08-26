const rt = require("express").Router();

rt.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

// ===== Router for user ====
const user = require("./controller/user.control");
rt.post("/login", user.login);
rt.get("/users", user.getAll);

module.exports = rt;
