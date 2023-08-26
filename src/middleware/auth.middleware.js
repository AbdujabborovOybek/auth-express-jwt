const tokenService = require("../service/token.service");
const { unauthorized } = require("../service/res.service");

const auth = async (req, res, next) => {
  const path = req.path;
  if (path === "/login") return next();
  const token = req?.headers?.authorization?.split(" ")[1] || null;

  if (!token) return unauthorized(res, "Token is required!");
  const result = await tokenService.verifyToken(token);

  if (!result) return unauthorized(res, "Token is not valid!");
  req.user = result;
  next();
};

module.exports = auth;
