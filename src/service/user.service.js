const tokenService = require("./token.service");

class userService {
  // Login user PATH: /login (POST) (PUBLIC)
  async login(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const { username, password } = data;
        const next = username === "admin" && password === "admin";
        if (!next) resolve(null);
        const token = await tokenService.generateToken({ ...user });
        resolve({ user, token });
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  // Get all users PATH: /users (GET) (PRIVATE)
  async getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        resolve({
          total: users.length,
          users,
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new userService();

const user = {
  id: "2ds5dy6u8",
  fullname: "Administrator",
  role: "Owner",
  phone: "123456789",
  username: "admin",
  password: "admin",
};

const users = [
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
  {
    id: "2ds5dy6u8",
    fullname: "Administrator",
    role: "Owner",
    phone: "123456789",
    username: "admin",
    password: "admin",
  },
];
