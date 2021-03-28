import { SignalingServer } from './app/signaling-server';
import consoleStamp from 'console-stamp';

consoleStamp(console, {
  metadata: () => {
    return `[Signaling]`;
  },
  labelSuffix: '] Server   🚀',
  colors: { stamp: 'yellow', label: 'white', metadata: 'green' },
});

const server = new SignalingServer('0.0.0.0', +process.env.PORT || 8080);

process.on('exit', () => {
  server.close();
});
