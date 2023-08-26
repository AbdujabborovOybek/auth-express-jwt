const response = require("../service/res.service");
const { success, created, notFound, serverError } = response;
const userService = require("../service/user.service");

class userContol {
  // Login user PATH: /login (POST) (PUBLIC)
  async login(req, res) {
    try {
      const result = await userService.login(req.body);
      const notfound = "username or password is wrong!";
      if (!result) return await response.notFound(res, notfound);
      const msg = "Welcome to the jungle!";
      await success(res, msg, result);
    } catch (err) {
      await serverError(res, err);
    }
  }

  // Get all users PATH: /users (GET) (PRIVATE)
  async getAll(req, res) {
    try {
      const result = await userService.getAll();
      if (!result) return await notFound(res, "Users not found!");
      const msg = "Get all users success!";
      await success(res, msg, result);
    } catch (err) {
      await serverError(res, err);
    }
  }
}

module.exports = new userContol();
