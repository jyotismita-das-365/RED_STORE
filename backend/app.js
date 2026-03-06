//Core Modules
const http = require('http');
//External Modules
const express = require('express');

const app = express();

app.use((req, res,next) => {
  console.log("First");
  next();
});

app.use((req, res, next) => {
  console.log("Second");
})

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});