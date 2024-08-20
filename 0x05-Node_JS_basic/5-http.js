const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      if (process.argv[2]) {
        const data = await countStudents(process.argv[2]);
        res.end(data);
      } else {
        const studentsData = await countStudents('database.csv');
        res.end(studentsData);
      }
    } catch (err) {
      res.statusCode = 500;
      res.end('Error reading data');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
