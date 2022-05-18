const mongoose = require("mongoose");
const app = require("./app");
const port = 8000;

//**************DATABASE  CONNECTION******************
mongoose.connect(
  "mongodb+srv://myNewDatabase:Mahatab123@cluster0.zhoox.mongodb.net/bookstoredb?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("database connected successfully");
});

//****************SERVER CREATION**********************
app.listen(port, () => console.log(`Server running on ${port} port`));
