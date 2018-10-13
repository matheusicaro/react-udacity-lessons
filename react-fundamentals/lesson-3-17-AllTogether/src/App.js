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
    console.log(this.state)

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
        
        <div className="chat-window">

          <h2>Super Awesome Chat</h2>
          <MessageWindow user={userAmy} messages={messages} addMessage={this.addMessage}></MessageWindow>
        
        </div>

        <div className="container">
        </div>
        </div>

        /*
            <MessageWindow user={userAmy}></MessageWindow>
            <MessageWindow user={userJohn}></MessageWindow>
      



          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>
              <ul className="message-list">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === users[0].username ? 'message sender' : 'message recipient'
                    }
                  >
                    <p>{`${message.username}: ${message.text}`}</p>
                  </li>
                ))}
              </ul>
            <div>

              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>





          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>   */
    );
  }
}

export default App;
