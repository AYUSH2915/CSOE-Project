const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(require("./routes/index"));
app.use(require("./routes/todo"));

mongoose.connect("mongodb://localhost/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded());
app.use(express.express.static("public"));
app.set("View enjine", "ejs");

app.listen(3000, () => console.log("Server is running successfully..."));
