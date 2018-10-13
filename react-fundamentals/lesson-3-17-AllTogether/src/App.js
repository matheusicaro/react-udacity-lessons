import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MessageWindow from './components/MessageWindow'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {

  state = {
      messages: messages
  }

  addMessage = (messages) =>{
    
    this.setState(oldState =>({
        ...oldState,
        messages: messages
    }))

  }

  render() {

    const userAmy = users[0].username;
    const userJohn = users[1].username; 
    const messages = this.state.messages;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        
        <div className="container">
    
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <MessageWindow user={userAmy} messages={messages} addMessage={this.addMessage}></MessageWindow>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <MessageWindow user={userJohn} messages={messages} addMessage={this.addMessage}></MessageWindow>
          </div>

        </div>
        
      </div>

    );
  }
}

export default App;
