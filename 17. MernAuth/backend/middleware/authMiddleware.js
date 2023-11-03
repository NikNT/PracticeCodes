import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt; // we are able to do this because of cookie-parser : otherwise won't be able to!

  if (token) {
    try {
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
