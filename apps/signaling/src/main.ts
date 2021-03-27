import { SignalingServer } from './app/signaling-server';
import consoleStamp from 'console-stamp';

consoleStamp(console, {
  metadata: () => {
    return `[SignalingServer] (memory: ${process.memoryUsage().rss}): `;
  },
  colors: {
    stamp: 'yellow',
    label: 'white',
    metadata: 'green',
  },
});

const host = '0.0.0.0';
const port = +process.env.PORT || 8080;

const signalingServer = new SignalingServer(host, port);

process.on('exit', () => {
  console.log('exit');

  signalingServer.close();
});
