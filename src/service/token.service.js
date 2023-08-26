const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY;

class tokenService {
  async generateToken(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const option = { expiresIn: "20s", algorithm: "HS256" };
        const token = jwt.sign(payload, key, option);
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  }

  async verifyToken(token) {
    return new Promise(async (resolve, reject) => {
      try {
        try {
          const decoded = jwt.verify(token, key);
          resolve(decoded);
        } catch (err) {
          resolve(null);
        }
      } catch (err) {
        reject("Token is not valid!");
      }
    });
  }
}

module.exports = new tokenService();
