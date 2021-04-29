require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");

const port = 80;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOption = {
  origin: "*",
  credentials: true,
  method: ["GET", "POST", "OPTIONS"],
};
app.use(cors(corsOption));

// * router 분기
const { main, users, farm, crop, seed, storage } = require("./router");

app.use("/", main);
app.use("/users", users);
app.use("/farm", farm);
app.use("/crop", crop);
app.use("/seed", seed);
app.use("/storage", storage);

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
