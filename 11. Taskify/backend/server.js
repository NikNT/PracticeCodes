require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;
const taskRoutes = require("./routes/task");

const db = require("./database");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/tasks", taskRoutes);

db()
  .then(
    app.listen(PORT, () => {
      console.log(`DB Connected | App Listening on ${PORT}`);
    })
  )
  .catch((err) => console.error(err));
