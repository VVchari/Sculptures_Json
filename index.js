const jsonServer = require('json-server');
const server = jsonServer.create();
const cors = require('cors');  // Corrected the typo here
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: 'public' });
const port = process.env.PORT || 8080;

// Use CORS middleware to allow cross-origin requests
server.use(cors());

// Use default middlewares (like logger, static, etc.)
server.use(middlewares);

// Use the router to handle requests for db.json
server.use(router);

// Start the server on the specified port
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
