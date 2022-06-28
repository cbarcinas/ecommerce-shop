require("dotenv").config();

const server = require("./api/server");
const mongoose = require("mongoose");

const connection_string = process.env.CONNECTION_STRING;

// Setup server listener
server.listen(5000, () => {
  console.log(`Sever running on port 5000`);
});

// To avoid dupolication errors, we can add a second param to
// connect method in order to handle any errors
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((err) => console.error("MongoDB connection failed:", err.message));
