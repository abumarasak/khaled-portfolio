const express = require("express");
const app = express();
const Contact = require("./contact");
app.use(express.json());

app.use("/contact", Contact);
const port = process.env.PORT || "5000";
app.listen(port, () => {
  console.log("app is running");
});
