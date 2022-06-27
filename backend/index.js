require("dotenv").config();

const server = require("./api/server");

const connection_string = process.env.connection_string || 5000;

// Setup server listener
server.listen(port, () => {
  console.log(`\n*** Sever running on port ${port} ***\n`);
});
