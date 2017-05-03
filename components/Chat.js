import React from 'react';
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
      // var username = window.prompt('input user name:');
      var username = 'user001';
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
    var username = this.state.username||'anonymous';
    var msgs = this.state.msgs || [];
    var content = msgs.map(function(item, i){
      return (
        <li key={i}>{`user_${item.user||'anonymous'}: ${item.text}`}</li>
      );
    });
    return (
      <div>
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
