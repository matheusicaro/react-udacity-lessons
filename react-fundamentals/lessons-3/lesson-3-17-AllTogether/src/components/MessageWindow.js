import React, { Component } from 'react'
import PropTypes from 'prop-types';

import MessageInput from './MessageInput'

class MessageWindow extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }
    
    sendMessage = (message) =>{
        const { user, messages } = this.props;
        messages.push({
            username: user,
            text: message
        })

        this.props.addMessage(messages)
    }

    render() {

        const {user, messages} = this.props;

        return (
            <div>
                <div className="name sender">{user}</div>
                <ul className="message-list">
                    {messages.map((message, index) => (
                    <li
                        key={index}
                        className={
                        message.username === user ? 'message sender' : 'message recipient'
                        }
                    >
                        <p>{`${message.username}: ${message.text}`}</p>
                    </li>
                    ))}
                </ul>

                <MessageInput sendMessage={this.sendMessage}></MessageInput>
          </div>
        )
    }
}

MessageWindow.propTypes = {
    sendMessage: PropTypes.func.isRequired,
};

export default MessageWindow