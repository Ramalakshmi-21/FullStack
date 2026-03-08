const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/BMI_Calc.html");
});

app.post("/calculate", function (req, res) {
  const weight = Number(req.body.weight);

  const height = Number(req.body.height);

  const bmi = weight / (height * height);

  res.send(
    "<h2>Your BMI is: " + bmi.toFixed(2) + "</h2><br><a href='/'>Back</a>",
  );
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
