import bodyParser from "body-parser";
import express from "express";
import router from "./routes/routes.js";
import config, { configDotenv } from "dotenv";
import mongoose from "mongoose";

//NODE -> Framework -> Express

// npm install express
// cors
// bodyParser
// mongoose - BE and DB ke beech me
// dotenv
// nodemon

const app = express();
//middleware
app.use(bodyParser.json()); //parse
configDotenv();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// FORM

// POSTMAN -> API Testing

// CRUD
app.use("/api/tasks", router);

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Listening on Port 5000");
});
