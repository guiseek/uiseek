import { IMessageEvent, w3cwebsocket } from 'websocket';

export interface PeerError {
  error: Error;
  description?: string;
}

export class Peer {
  connection: RTCPeerConnection;
  signaling: w3cwebsocket;

  constructor(config: RTCConfiguration, url?: string, protocol?: string) {
    this.connection = new RTCPeerConnection(config);

    /**
     * WebSocket by W3C
     */
    this.signaling = new w3cwebsocket(url, protocol);
    this.signaling.onerror = () => {
      console.log('Connection Error');
    };

    this.signaling.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    this.signaling.onclose = () => {
      console.log('echo-protocol Client Closed');
    };
  }

  async offer() {
    return this.connection
      .createOffer()
      .then(async (o) => await this.connection.setLocalDescription(o))
      .then(() => this.connection.localDescription);
  }

  async answer(val: RTCSessionDescriptionInit) {
    return this.connection.setRemoteDescription(val).then((a) =>
      this.connection
        .createAnswer()
        .then(async (o) => await this.connection.setLocalDescription(o))
        .then(() => this.connection.localDescription)
    );
  }

  remote(val: RTCSessionDescription) {
    const sdp = new RTCSessionDescription(val);
    return this.connection.setRemoteDescription(sdp);
  }

  candidate(val: RTCIceCandidate) {
    const ice = new RTCIceCandidate(val);
    this.connection.addIceCandidate(ice);
  }

  stream(media: MediaStream) {
    this.connection.addTrack(media.getTracks().shift());
  }

  onCandidate(fn: (ice: RTCIceCandidate) => void) {
    const emit = ({ candidate }) => candidate && fn(candidate);
    this.connection.addEventListener('icecandidate', emit);
  }

  onTrack(fn: (media: MediaStream) => void) {
    const emit = ({ streams }) => fn(streams?.shift());
    this.connection.addEventListener('track', emit);
  }

  onNegotiationNeeded(fn: (ev: Event) => void) {
    this.connection.addEventListener('negotiationneeded', (ev) => fn(ev));
  }

  onError(fn: (err: PeerError) => void) {
    const emit = ({ errorCode, errorText, type, url, timeStamp }) =>
      fn({
        error: new Error(`${errorCode}: ${errorText}`),
        description: `${type}: ${url} at ${timeStamp}`,
      });
    this.connection.addEventListener('icecandidateerror', emit);
  }

  // WebSocket

  send(data: Object) {
    this.signaling.send(JSON.stringify(data));
  }

  onMessage(fn: (data: any) => void) {
    this.signaling.onmessage = ({ data }) => fn(JSON.parse(String(data)));
  }
}
