import React, {Component} from 'react'
import Button from './Button'

import '../styles/style.css';

class UserAdd extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:{
                firstName: '',
                lastName: '',
                login: ''
            }
        }
    }

    inputForm = (event)=>{
        const {name, value} = event.target;

        this.setState(currentState =>({

            user:{
                ...currentState.user,
                [name]:value
            }
        }))
    }

    handleSubmit = (event) =>{

    }

    isInvalidForm = () =>{
        const {firstName, lastName, login} = this.state.user;
        return (firstName==='' || lastName==='' || login==='') ? true : false
    }

    render() {
      return (
        <form className="Component" onSubmit={this.handleSubmit}>
            
            <label for="fname">First Name</label>
            <input 
                type="text" 
                id="fname" 
                name="firstName" 
                value={this.state.user.firstName}
                onChange={this.inputForm}
                placeholder="Your first name.."
            />

            <label for="lname">Last Name</label>
            <input 
                type="text" 
                id="fname" 
                name="lastName" 
                value={this.state.user.lastName}
                onChange={this.inputForm}
                placeholder="Your last name.."
            />

            <label for="lname">Your Login</label>
            <input 
                type="text" 
                id="fname" 
                name="login" 
                value={this.state.user.login}
                onChange={this.inputForm}
                placeholder="Your login for access.."
            />    

            <Button isDisabled={this.isInvalidForm()} text="Submit"></Button>
            
            { (this.isInvalidForm()) ? <div style={warning}> Attention, there is a blank field. </div> : "" }

        </form>
      )
    }
}

export default UserAdd

const warning = {
    background: '#0123',
    color: 'black',
    padding: '1%'
}