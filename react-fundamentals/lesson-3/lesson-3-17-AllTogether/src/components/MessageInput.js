import React, { Component } from 'react'

class MessageInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendMessage(this.state.message)
    }

    handleInputChange = (event) => {
        const { value } = event.target;
        
        this.setState({
            message: value
        })
    }

    render() {
        return (
                <div>
                    <form className="input-group" onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            value={ this.state.message }
                            onChange={ this.handleInputChange }
                            className="form-control" 
                            placeholder="Enter your message..." 
                        />

                        <button className="btn submit-button" >
                            SEND
                        </button>
                    </form>
                </div>
        )
    }
}

export default MessageInput