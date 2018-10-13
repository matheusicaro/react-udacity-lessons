import React, { Component } from 'react'

class MessageWindow extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }
    
    render() {
        const {user, messages} = this.props;

        return (
            <div>
                <div className="name sender">{user.username}</div>
                <ul className="message-list">
                    {messages.map((message, index) => (
                    <li
                        key={index}
                        className={
                        message.username === user.username ? 'message sender' : 'message recipient'
                        }
                    >
                        <p>{`${message.username}: ${message.text}`}</p>
                    </li>
                    ))}
                </ul>
          </div>
        )
    }
}

export default MessageWindow