const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
const port = process.env.PORT || 8080;
const router = require("./src/router");
const auth = require("./src/middleware/auth.middleware");

app.use(cors());
app.use(express.json());
app.use(auth);
app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
