import { HandshakeResponse } from './common/handshake-response';
import { relayErrorReason } from './common/relay-error-reason';
import { server as WebSocketServer } from 'websocket';
import { RelayError } from './common/relay-error';
import { createServer, Server } from 'http';
import { Message } from './common/message';
import { toText } from './utils';
import sha256 from 'tiny-sha256';

export class SignalingServer {
  httpServer: Server;

  idConnectionMap = new Map();
  connectionIdMap = new Map();

  constructor(public host: string, public port: number) {
    this.httpServer = createServer((req, res) => {
      if (req.url.endsWith('/signaling/health-check')) {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(toText({ message: 'OK' }));
      }
    });

    this.httpServer.listen(port, host, () => {});
    const webSocketServer = new WebSocketServer({
      httpServer: this.httpServer,
    });

    webSocketServer.on('request', (request) => {
      const remote = `${request.socket.remoteAddress}:${request.socket.remotePort}`;
      console.log(`signaling server connection request from ${remote}`);

      const connection = request.accept('webrtc-signaling', request.origin);

      connection.on('message', (message) => {
        if (message.type === 'utf8') {
          const messageObject = JSON.parse(message.utf8Data);

          if (messageObject.typeName === 'HandshakeRequest') {
            if (messageObject.email && messageObject.secret) {
              const id = sha256(
                messageObject.email.toString() + messageObject.secret.toString()
              );

              this.idConnectionMap.set(id, connection);
              this.connectionIdMap.set(connection, id);

              const remote = `${connection.socket.remoteAddress}':'${connection.socket.remotePort}`;
              const identity = `${id} ${messageObject.email}`;

              console.log(
                `signaling server handshake success: ${identity} ${remote}`
              );

              connection.sendUTF(JSON.stringify(new HandshakeResponse(id)));
            } else {
              const remote = `${connection.socket.remoteAddress}:${connection.socket.remotePort}`;
              console.log(`signaling server handshake failed: ${remote}`);

              const response = new HandshakeResponse(
                null,
                'email and or secret is not defined in HandshakeRequest'
              );
              connection.sendUTF(JSON.stringify(response));
            }
          }

          if (
            messageObject.typeName === 'Message' &&
            this.connectionIdMap.has(connection)
          ) {
            const connectionSourceId = this.connectionIdMap.get(connection);
            const {
              sourceId,
              targetId,
              contentType,
              contentJson,
            } = messageObject as Message;

            const isValidMessage =
              connectionSourceId &&
              sourceId === sourceId &&
              targetId &&
              contentType &&
              contentJson;

            if (isValidMessage) {
              if (this.idConnectionMap.has(targetId)) {
                const targetConnection = this.idConnectionMap.get(targetId);

                const messageJson = JSON.stringify(messageObject);
                const content = `${contentType} : ${contentJson}`;

                const source = `${connection.socket.remoteAddress}:${connection.socket.remotePort}`;
                const target = `${targetConnection.socket.remoteAddress}:${targetConnection.socket.remotePort}`;
                const message = [
                  content,
                  'from',
                  sourceId,
                  source,
                  'to',
                  targetId,
                  target,
                ];

                console.log(
                  'signaling server relayed message ' + message.join(' ')
                );

                targetConnection.sendUTF(messageJson);
              } else {
                connection.sendUTF(
                  JSON.stringify(
                    new RelayError(
                      relayErrorReason.TARGET_NOT_FOUND,
                      messageObject
                    )
                  )
                );
              }
            } else {
              connection.sendUTF(
                JSON.stringify(
                  new RelayError(
                    relayErrorReason.MESSAGE_INVALID,
                    messageObject
                  )
                )
              );
            }
          }
          //
        }
      });

      connection.on('close', () => {
        const remote = `${connection.socket.remoteAddress}:${connection.socket.remotePort}`;
        if (this.connectionIdMap.has(connection)) {
          const id = this.connectionIdMap.get(connection);
          console.log(`signaling server disconnected: ${id} ${remote}`);
          this.connectionIdMap.delete(connection);
          this.idConnectionMap.delete(id);
        } else {
          console.log(`signaling server disconnection. ${remote}`);
        }
      });
    });

    console.log(`signaling server listening on ws://${host}:${port}`);
  }

  close() {
    console.log('signaling server closing ...');
    this.idConnectionMap.forEach((connection, id) => {
      const remote = `${connection.socket.remoteAddress}:${connection.socket.remotePort}`;
      console.log(`signaling server disconnecting: ${id} ${remote}`);
      connection.close();
    });
    this.httpServer.close();
    console.log('signaling closed ...');
    this.onClose();
  }

  onClose() {}
}
