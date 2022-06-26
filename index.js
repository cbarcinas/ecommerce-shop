const server = require("./api/server");

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`\n*** Sever running on port${port} ***\n`);
});
