import { createServer, Server as HttpServer } from 'http';

// const host = 'localhost';
// const port = +process.env.PORT || 8080;

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('My first server!');
// };

// const server = createServer(requestListener);
// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

const toText = (obj: object) => JSON.stringify(obj);

export class Server {
  httpServer: HttpServer;
  constructor(
    host: string = '0.0.0.0',
    port: number = +process.env.PORT ?? 8080
  ) {
    this.httpServer = createServer((req, res) => {
      if (req.url.endsWith('/signaling/health-check')) {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(toText({ message: 'OK' }));
      }
    });
    this.httpServer.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  }
}
