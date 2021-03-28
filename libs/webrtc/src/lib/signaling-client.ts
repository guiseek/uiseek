import { HandshakeRequest, relayErrorReason } from './common';
import { ObjectType, SignalingStateType } from './types';
import { w3cwebsocket } from 'websocket';
import { Message } from './common/message';

export class SignalingClient {
  id: string | null;

  state: SignalingStateType;

  static states: Record<SignalingStateType, SignalingStateType> = {
    CONNECTING: 'CONNECTING',
    CONNECTED: 'CONNECTED',
    CONNECTION_FAILED: 'CONNECTION_FAILED',
    DISCONNECTED: 'DISCONNECTED',
  };

  constructor(
    public webSocket: w3cwebsocket,
    public url: string,
    public email: string,
    public secret: string
  ) {
    this.state = SignalingClient.states.CONNECTED;
  }

  send(targetId: string, objectType: ObjectType, object: any) {
    if (this.state !== SignalingClient.states.CONNECTED) {
      throw new Error(
        `signaling client send() called when in state is not connected: ${this.state}`
      );
    }
    if (this.id) {
      const objectJson = JSON.stringify(object);
      //console.log('signaling client sent message ' + objectType + ' : ' + objectJson)
      this.webSocket.send(
        JSON.stringify(new Message(this.id, targetId, objectType, objectJson))
      );
    }
  }

  disconnect() {
    this.webSocket.close();
  }

  connect() {
    if (
      this.state !== SignalingClient.states.DISCONNECTED &&
      this.state !== SignalingClient.states.CONNECTION_FAILED
    ) {
      console.error(
        'signaling client connect() called when in state is not disconnected or connection failed'
      );
      throw new Error(
        'signaling client connect() called when in state is not disconnected or connection failed: ' +
          this.state
      );
    }
    this.state = SignalingClient.states.CONNECTING;
    if (this.webSocket) {
      this.webSocket.close();
    }
    this.webSocket = new w3cwebsocket(this.url, 'webrtc-signaling');

    this.webSocket.onerror = (error) => {
      if (this.id) {
        //console.log('signaling client connection error');
        this.onConnectionError(error);
        this.disconnect();
      } else {
        //console.log('signaling client connect failed');
        this.state = SignalingClient.states.CONNECTION_FAILED;
        this.onConnectFailed(error);
      }
    };

    this.webSocket.onclose = () => {
      //console.log('signaling client disconnected');
      this.state = SignalingClient.states.DISCONNECTED;
      this.onDisconnect();
      this.webSocket.close();
    };

    this.webSocket.onopen = () => {
      //console.log('signaling client connected');
      //console.log('signaling client handshake started')
      this.webSocket.send(
        JSON.stringify(new HandshakeRequest(this.email, this.secret))
      );
    };

    this.webSocket.onmessage = (message) => {
      if (typeof message.data === 'string') {
        const messageObject = JSON.parse(message.data);
        if (messageObject.typeName === 'HandshakeResponse') {
          if (messageObject.id) {
            //console.log('signaling client handshake complete: ' + messageObject.id);
            this.id = messageObject.id;
            this.state = SignalingClient.states.CONNECTED;
            this.onConnected(messageObject.id);
          } else {
            console.warn(
              'signaling client handshake failed: ' + messageObject.error
            );
            this.disconnect();
            this.state = SignalingClient.states.CONNECTION_FAILED;
          }
        }
        if (messageObject.typeName === 'Message') {
          //console.log('signaling client received message : ' + messageObject.contentType + ' : ' + messageObject.contentJson + ' from ' + messageObject.sourceId)
          this.onReceive(
            messageObject.sourceId,
            messageObject.contentType,
            JSON.parse(messageObject.contentJson)
          );
        }
        if (messageObject.typeName === 'RelayError') {
          if (messageObject.reason === relayErrorReason.MESSAGE_INVALID) {
            this.onInvalidMessage(
              messageObject.message.targetId,
              messageObject.message.contentType,
              JSON.parse(messageObject.message.contentJson)
            );
          }
          if (messageObject.reason === relayErrorReason.TARGET_NOT_FOUND) {
            this.onTargetNotFound(
              messageObject.message.targetId,
              messageObject.message.contentType,
              JSON.parse(messageObject.message.contentJson)
            );
          }
        }
      }
    };

    //console.log('signaling client connecting ' + url)
  }

  onConnected(id: string) {}

  onConnectFailed(error: string | Error | Event) {}

  onConnectionError(error: string | Error | Event) {}

  onTargetNotFound(targetId: string, objectType: ObjectType, object: any) {}

  onInvalidMessage(targetId: string, objectType: ObjectType, object: any) {}

  onDisconnect() {}

  onReceive(sourceId: string, objectType: string, object: any) {}

  connec() {}
}
