require("dotenv").config();

const server = require("./api/server");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

// Setup server listener
server.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});

// To avoid dupolication errors, we can add a second param to
// connect method in order to handle any errors
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((err) => console.error("MongoDB connection failed:", err.message));
