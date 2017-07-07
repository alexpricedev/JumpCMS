import auth from 'feathers-authentication-client';
import feathers from 'feathers-client'
import hooks from 'feathers-hooks'
import io from 'socket.io-client';
import reactive from 'feathers-reactive'
import rxjs from 'rxjs'
import socketio from 'feathers-socketio/client';

// Connect to the api (assumes same host & port
// but is proxied in dev - see package.json)
const socket = io();

const client = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(reactive(rxjs))
  .configure(auth({ storage: window.localStorage }));

export default client;
