import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.status(400).json({
      error: "User already Exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  if (!user) {
    try {
      const user = await UserModel.create({
        username,
        password: hashedPassword,
      });

      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({
        error: "Something went wrong",
      });
    }
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(404).json({
      Error: "User Doesn't Exist",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      Error: "Unauthorized! Wrong Credentials",
    });
  }

  const secret = process.env.SECRET;

  const token = jwt.sign(
    {
      id: user._id,
    },
    secret
  );

  res.status(200).json({
    token,
    userID: user._id,
  });
};
