const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    fs.readFile('index.html', 'utf8', (err, content) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else if (url === '/about') {
    fs.readFile('about.html', 'utf8', (err, content) => {
      // ... (same as above for about.html)
    });
  } else if (url === '/contact-me') {
    fs.readFile('contact-me.html', 'utf8', (err, content) => {
      // ... (same as above for contact-me.html)
    });
  } else {
    fs.readFile('404.html', 'utf8', (err, content) => {
      // ... (same as above for 404.html)
    });
  }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
