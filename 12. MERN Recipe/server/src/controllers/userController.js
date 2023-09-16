import bcrypt from "bcrypt";
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
