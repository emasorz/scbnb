const express = require('express');
const serveStatic = require('serve-static');

const app = express();

const staticPath = 'public'; // Replace with your actual directory name

app.use('/', serveStatic(staticPath));

const port = 4000; // You can choose any available port

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});