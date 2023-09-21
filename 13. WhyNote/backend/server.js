const express = require("express");
const app = express();
const notesRoutes = require("./routes/notesRoutes");
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
