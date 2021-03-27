import { SignalingClient } from './signaling-client';
import { ObjectType } from './types/object-type';
import { error, timeout } from './utils';

export class SignalingChannel {
  autoReconnect: boolean = true;

  // Map of server URLs and SignalingClients
  clients = new Map();

  // Map of server URLs and onServerConnectedCallbacks
  onServerConnectedCallbacks = new Map();

  // RTC peer connections
  connections = new Map();

  static objectType: Record<ObjectType, ObjectType> = {
    OFFER: 'OFFER',
    ANSWER: 'ANSWER',
    ICE_CANDIDATE: 'ICE_CANDIDATE',
  };

  constructor(public webSocketImplementation: WebSocket) {}

  onOffer(signalingServeUrl: string, peerId: string, offer: any) {
    const channel = `${signalingServeUrl}, ${peerId}, ${offer}`;
    const message = `
      on offer: onOffer has to be overridden with implementation
      of returning new RTCPeeringConnection(configuration)
    `;
    throw new Error(`signaling channel (${channel}) - ${message}`);
  }

  // On listen for RTC peer connections.
  onServerConnected(signalingServeUrl: string, selfPeerId: string) {}

  onServerConnectFailed(
    error: string | Error | Event,
    signalingServeUrl: string
  ) {}

  onTargetNotFound(
    url: string,
    targetId: string,
    objectType: ObjectType,
    object: any
  ) {}

  onServerDisconnect(signalingServeUrl: string) {}

  onServerConnectionError(signalingServeUrl: string) {}

  // Closes the signaling channel.
  close() {
    this.autoReconnect = false;
    this.clients.forEach((value) => {
      value.disconnect();
    });
  }

  removeConnection(connection) {
    this.connections.forEach((value, key) => {
      if (value === connection) {
        this.connections.delete(key);
      }
    });
  }

  removeServer(url: string) {
    if (this.clients.has(url)) {
      if (
        this.clients.get(url).state === this.clients.get(url).State.CONNECTED
      ) {
        this.clients.get(url).disconnect();
      }
      this.clients.delete(url);
    }
    if (this.onServerConnectedCallbacks.has(url)) {
      this.onServerConnectedCallbacks.delete(url);
    }
    this.connections.forEach((value, key) => {
      if (key.startsWith(url)) {
        this.connections.delete(key);
      }
    });
  }

  // Start listening for RTC peer connections.
  addServer(
    url: string,
    email: string,
    secret: string,
    connectedCallback: string,
    connectFailedCallback: (error: string | Error | Event) => void
  ) {
    if (connectedCallback) {
      this.onServerConnectedCallbacks.set(url, connectedCallback);
    }

    const client = new SignalingClient(
      this.webSocketImplementation,
      url,
      email,
      secret
    );
    this.clients.set(url, client);

    client.onConnected = (id) => {
      this.onServerConnected(url, id);
      if (this.onServerConnectedCallbacks.has(url)) {
        const onServerConnectedCallback = this.onServerConnectedCallbacks.get(
          url
        );
        if (onServerConnectedCallback) {
          onServerConnectedCallback(url, id);
        }
        this.onServerConnectedCallbacks.delete(url);
      }
    };

    client.onConnectFailed = (error) => {
      console.log('Connect failed.');
      if (connectFailedCallback) {
        connectFailedCallback(error);
      }
      this.onServerConnectFailed(error, url);
    };

    client.onTargetNotFound = (targetId, objectType, object) => {
      const target = `${targetId} ${objectType} ${JSON.stringify(object)}`;
      console.log(`signaling channel (${url}) - target not found:  ${target}`);

      this.onTargetNotFound(url, targetId, objectType, object);
    };

    client.onInvalidMessage = (targetId, objectType, object) => {
      console.log(
        'signaling channel (' +
          url +
          ') - on invalid message: ' +
          targetId +
          ' ' +
          objectType +
          ' ' +
          JSON.stringify(object)
      );
    };

    client.onReceive = async (sourceId, objectType, object) => {
      try {
        if (objectType === SignalingChannel.objectType.OFFER) {
          // const connection = this.onOffer(url, sourceId, object);
          const connection = await this.offer(url, sourceId, object);
          if (connection) {
            this.connections.set(
              url + '/' + client.id + '-' + sourceId,
              connection
            );

            connection.onicecandidate = async (candidate) => {
              try {
                client.send(
                  sourceId,
                  SignalingChannel.objectType.ICE_CANDIDATE,
                  candidate.candidate
                );
              } catch (error) {
                console.warn(
                  'signaling channel (' +
                    url +
                    ') - on ice candidate: ' +
                    error.message
                );
              }
            };

            /**
             * Finalizar
             */
            // await connection.setRemoteDescription(object);
            // await connection.setLocalDescription(
            //   await connection.createAnswer()
            // );
            // client.send(
            //   sourceId,
            //   SignalingChannel.objectType.ANSWER,
            //   connection.localDescription
            // );
          }
        }

        if (objectType === SignalingChannel.objectType.ANSWER) {
          const connection = this.connections.get(
            url + '/' + client.id + '-' + sourceId
          );
          if (connection) {
            await connection.setRemoteDescription(object);
          }
        }

        if (objectType === SignalingChannel.objectType.ICE_CANDIDATE) {
          if (object) {
            if (this.connections.has(url + '/' + client.id + '-' + sourceId)) {
              const connection = this.connections.get(
                url + '/' + client.id + '-' + sourceId
              );
              if (connection) {
                connection.addIceCandidate(object);
              }
            }
          }
        }
      } catch (e) {
        error(
          'signaling channel (' +
            url +
            ') - on receive: error processing received object ' +
            objectType +
            ' ' +
            JSON.stringify(object) +
            ':' +
            e.message
        );
      }
    };

    client.onDisconnect = () => {
      this.onServerDisconnect(url);
      // Reconnect after 10 seconds.
      //console.log('signaling channel (' + url + ') - on disconnect: disconnected')
      if (this.autoReconnect) {
        setTimeout(() => {
          console.log(
            'signaling channel (' +
              url +
              ') - on disconnect: auto reconnect enabled, attempting to reconnect'
          );
          client.connect();
        }, 3000);
      }
    };

    client.onConnectionError = () => {
      this.onServerConnectionError(url);
    };
  }

  // Send offer to RTC peer
  async offer(signalingServerUrl, peerId, connection) {
    try {
      let client = this.clients.get(signalingServerUrl);
      await this.waitForClientToConnect(signalingServerUrl, client);

      this.connections.set(
        signalingServerUrl + '/' + client.id + '-' + peerId,
        connection
      );

      const onicecandidate = async (candidate) => {
        try {
          client.send(
            peerId,
            SignalingChannel.objectType.ICE_CANDIDATE,
            candidate.candidate
          );
        } catch (error) {
          console.warn(
            'signaling channel (' +
              signalingServerUrl +
              ') - on ice candidate: ' +
              error.message
          );
        }
      };

      const createOffer = () =>
        Promise.resolve(async (offer) => {
          try {
            await connection.setLocalDescription(offer);
            client.send(
              peerId,
              SignalingChannel.objectType.OFFER,
              connection.localDescription
            );
          } catch (error) {
            console.error(
              'signaling channel (' +
                signalingServerUrl +
                ') - create offer: ' +
                error.message
            );
          }
        });

      return {
        onicecandidate,
        createOffer,
      };
    } catch (e) {
      error(
        'signaling channel (' +
          signalingServerUrl +
          ') - offer : error sending offer to rtc peer: ' +
          e.message
      );
    }
  }

  async waitForClientToConnect(
    signalingServerUrl: string,
    client: SignalingClient
  ) {
    if (!client) {
      error(
        'signaling channel (' +
          signalingServerUrl +
          ') - waiting for client to connect : not connected to signaling server'
      );
    }

    //console.log("offer waiting for client to connect: " + signalingServerUrl)
    let i = 0;
    while (client.state !== SignalingClient.states.CONNECTED) {
      await timeout(100);
      i++;
      if (i > 50) {
        const message = `signaling channel (${signalingServerUrl}) - waiting for client to connect : timed out`;
        error(message);
      }
    }
  }
}
