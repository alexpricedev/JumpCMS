import auth from 'feathers-authentication-client';
import feathers from 'feathers-client'
import hooks from 'feathers-hooks'
import io from 'socket.io-client';
import reactive from 'feathers-reactive'
import rxjs from 'rxjs'
import socketio from 'feathers-socketio/client';

// API URL
const url = 'http://localhost:3030';

// Connect to the socket
const socket = io(url);

const client = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(reactive(rxjs))
  .configure(auth({ storage: window.localStorage }));

export default client;
