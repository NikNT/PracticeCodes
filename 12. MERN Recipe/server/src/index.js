import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";

const app = express();
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose
  .connect(mongoURI)
  .then(console.log("DB Connected"))
  .catch((err) => console.error(`Error : ${err}`));

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
