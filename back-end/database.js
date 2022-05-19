const mongoose = require("mongoose");

//**************DATABASE CONNECTION ESTABLISHMENT******************
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

module.exports = db;
