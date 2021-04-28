require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");

const port = 80;

const app = express();
const controllers = require("./controllers");
const router = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOption = {
  origin: "*",
  credentials: true,
  method: ["GET", "POST", "OPTIONS"],
};
app.use(cors(corsOption));

// * router 분기
const { users, farm, crop, seed, storage } = require("./router");

app.use("/users", users);
app.use("/farm", farm);
app.use("/crop", crop);
app.use("/seed", seed);
app.use("/storage", storage);

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
