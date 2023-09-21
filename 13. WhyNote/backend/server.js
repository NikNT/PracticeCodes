const express = require("express");
const app = express();
const mongoose = require("mongoose");
const notesRoutes = require("./routes/notesRoutes");
require("dotenv").config();
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/notes", notesRoutes);

try {
  mongoose
    .connect(mongoURI)
    .then(() => {
      app.listen(PORT, () => {
        console.log(`MongoDB Connected | Listening on Port ${PORT}`);
      });
    })
    .catch((err) => console.error(err));
} catch (err) {
  console.error(err, "Error : Server/Mongo");
}
