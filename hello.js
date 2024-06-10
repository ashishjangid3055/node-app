const express = require("express");
const app = express();


app.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello, world!" });
})

app.listen(3000, () => {
  console.log("API is running")
})  