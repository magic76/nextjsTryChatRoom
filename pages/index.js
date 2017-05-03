import React from 'react';
import Header from '../components/Header';
import Chat from '../components/Chat';
import App from '../components/App';

export default class MyPage extends React.Component {
  render () {
    return (
      <App>
        <Header />
        <Chat />
      </App>
    )
  }
}
