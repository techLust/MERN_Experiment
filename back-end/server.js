const app = require("./app");
const dbConnection = require("./database");
const port = 8000;

//****************SERVER CREATION**********************
app.listen(port, () => console.log(`Server running on ${port} port`));
