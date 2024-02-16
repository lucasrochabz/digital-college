const http = require('node:http')

const server = http.createServer((request, response) => {

  if (request.url.includes('.png')) {
    response.write('Pensou que era um png né?');
    
  } else {
    response.write('Hello world!');
  }
  response.end();
})
server.listen(4444)
