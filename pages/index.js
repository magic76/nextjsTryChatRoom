import React from 'react';
import Head from 'next/head';
import socketio from 'socket.io-client';
const socketiohost = 'https://websocketwithchat.herokuapp.com/';
const socket = socketio(socketiohost);

export default class MyPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {username: 'anonymous', msgs: []};
      this.clickevent = this.clickevent.bind(this)
  }
  componentDidMount() {
      var username = window.prompt('input user name:');
      this.setState({username: username});
      // this.username = username;
      var socket = socketio(socketiohost);
      var self = this;
      socket.on('chat message', function(msg){
        self.setState({msgs: self.state.msgs.concat([msg])});
        var msgBody = document.querySelector('.msg_body');
        msgBody.scrollTop = msgBody.scrollHeight;
      });
    }
  clickevent () {
    socket.on('connect', function(){});
    socket.emit('chat message', {user: this.state.username, text: this.myTextInput.value});
    this.myTextInput.value = '';
  }
  render () {
    var {username} = this.state;
    var msgs = this.state.msgs || [];
    var content = msgs.map(function(item, i){
      return (
        <li key={i}>{`user_${item.user||'anonymous'}: ${item.text}`}</li>
      );
    });
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
            #messages li:nth-child(odd) { background: #eee; }
            .msg_body { position: absolute; height: calc(100% - 45px); width: 100%; overflow: auto;} `}
          </style>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="msg_body">
          <ul id="messages">
            <li>{`welcome user ${username}`}</li>
            {content}
          </ul>
        </div>
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
