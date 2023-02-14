const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

const server = require('https').createServer({
    key: fs.readFileSync('./priv.pem'),
    cert: fs.readFileSync('./cert.pem'),
}, app);

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(fs.readFileSync('./index.html'));
  res.end();
})

app.get('/co', (req, res) => {
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(fs.readFileSync('./index.html'));
  res.end();
})

app.get('/gc', (req, res) => {
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(fs.readFileSync('./gc.html'));
  res.end();
})

server.listen(port, () => console.log(`Listening on port ${port}`));
