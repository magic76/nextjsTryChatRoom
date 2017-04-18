import React from 'react';
import Head from 'next/head';
import socketio from 'socket.io-client';
const socketiohost = 'https://websocketwithchat.herokuapp.com/';
const socket = socketio(socketiohost);
export default class MyPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {username: 'anonymous'};
      this.clickevent = this.clickevent.bind(this)
  }
  componentDidMount() {
      var username = window.prompt('input user name:');
      this.setState({username: username});
      // this.username = username;
      var socket = socketio(socketiohost);
      socket.on('chat message', function(msg){
        var ele = document.createElement('li');
        ele.textContent = `user_${msg.user||'anonymous'}: ${msg.text}`;
        document.querySelector('#messages').append(ele);
      });
    }
  clickevent () {
    socket.on('connect', function(){});
    socket.emit('chat message', {user: this.state.username, text: this.myTextInput.value});
    this.myTextInput.value = '';
  }
  render () {
    var {username} = this.state;
    return (
      <div>
        <Head>
          <style>
            {`* { margin: 0; padding: 0; box-sizing: border-box; }
            body { font: 13px Helvetica, Arial; }
            #inputa { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
            #inputa input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
            #inputa button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
            #messages { list-style-type: none; margin: 0; padding: 0; }
            #messages li { padding: 5px 10px; }
            #messages li:nth-child(odd) { background: #eee; }`}
          </style>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ul id="messages">
          <li>{`welcome user ${username}`}</li>
        </ul>
          <div id="inputa">
            <input  id="m"
                    autoComplete="off"
                    ref={(ref) => this.myTextInput = ref}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                          this.clickevent.bind(this)()
                        }
                      }
                    }/>
            <button onClick={this.clickevent}>Send</button>
          </div>
      </div>
    )
  }
}
