const crypto = require("crypto");
const { sign, verify } = require("jsonwebtoken");
require("dotenv").config;

const env = process.env;

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, env.ACCESS_SECRET, { expiresIn: "1d" });
  },
  generateRefreshToken: (data) => {
    return sign(data, env.REFRESH_SECRET, { expiresIn: "30d" });
  },
  sendAccessToken: (res, statusCode, accessToken) => {
    res.status(statusCode).json({ data: { accessToken }, message: "ok" });
  },
  sendRefreshToken: (res, refreshToken) => {
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
  },
  isAuthorized: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    const token = authorization.split(" ")[1];
    try {
      return verify(token, env.ACCESS_SECRET);
    } catch (e) {
      return null;
    }
  },
  checkRefreshToken: (refreshToken) => {
    try {
      return verify(refreshToken, env.REFRESH_SECRET);
    } catch (e) {
      return null;
    }
  },
  createSalt: () => {
    return crypto.randomBytes(64).toString("base64");
  },
  createhashedPassword: (password, salt) => {
    return crypto
      .pbkdf2Sync(password, salt, 103523, 64, "sha512")
      .toString("base64");
  },
};
