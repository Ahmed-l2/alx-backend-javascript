const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }

  if (req.method === 'GET' && req.url === '/students') {
    res.statusCode = 200;
    const path = process.argv[2];
    try {
      const studentsData = await countStudents(path);
      res.end(`This is the list of our students\n${studentsData}`);
    } catch (err) {
      res.statusCode = 404;
      res.end('Error reading data');
    }
  }
});

app.listen(1245);

module.exports = app;
