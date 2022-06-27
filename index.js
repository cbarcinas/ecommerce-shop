require("dotenv").config();

const server = require("./api/server");
const mongoose = require("mongoose");

const connection_string = process.env.connection_string || 5000;

// Setup server listener
server.listen(port, () => {
  console.log(`\n*** Sever running on port ${port} ***\n`);
});

// To avoid dupolication errors, we can add a second param to 
// connect method in order to handle any errors
mongoose
  .connect(connection_string,{
    useNewURL
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((err) => console.error("MonggoDB connection failed:", err.message));
