// api/index.js
// 'ws://192.168.178.174:8081/ws'
var sslurl = 'wss://' + window.location.hostname + ":" + window.location.port + '/soundws'

var url = (process.env.REACT_APP_USER_URL === undefined) ?  sslurl :  process.env.REACT_APP_USER_URL

var socket = new WebSocket(url);

let connect = (cb) => {
  console.log("connecting")

  socket.onopen = () => {
    console.log("Successfully Connected");
  }
  
  socket.onmessage = (msg) => {
   // console.log("Message from WebSocket: " + msg.data);
    cb(msg);
  }

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event)
  }

  socket.onerror = (error) => {
    console.log("Socket Error: ", error)
  }
};

let sendMsg = (msg) => {
  //console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
