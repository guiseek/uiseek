export const environment = {
  production: true,
  signaling: {
    host: 'ws://localhost:3333',
    protocol: 'webrtc-signaling',
  },
  webrtc: {
    iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
  },
};
