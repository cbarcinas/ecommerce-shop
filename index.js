const server = require("./api/server");

const port = process.env.PORT || 5000;

// Setup server listener
server.listen(port, () => {
  console.log(`\n*** Sever running on port ${port} ***\n`);
});
