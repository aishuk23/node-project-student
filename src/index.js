const express = require("express");
const studentsRouter = require("./routers/studentsRouter");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Student App Home!</h1>");
});

app.use("/students", studentsRouter);

app.get("/teachers", (req, res) => {
  res.json({
    teachers: ["Dani", "Sam", "John"]
  });
});

app.listen(8080, () => {
  console.log("Server Running!");
});
