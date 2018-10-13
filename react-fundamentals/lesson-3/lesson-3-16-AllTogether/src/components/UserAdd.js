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
                login: '',
                numberOfGames: 0
            },
            isNewUser: true,
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
        event.preventDefault();
        
        let user = this.state.user;
        
        let isContained;

        for(let i=0; i < this.props.users.length; i++){
            if(this.props.users[i].firstName === user.firstName){
                isContained = true;
                break
            }
        }

        if(isContained)
            this.setState({ isNewUser: false})
        else{
            this.props.add(user)
            this.setState({ isNewUser: true})
        }
    }

    isInvalidForm = () =>{
        const {firstName, lastName, login} = this.state.user;
        return (firstName==='' || lastName==='' || login==='') ? true : false
    }

    render() {
      return (
        <form className="Component" onSubmit={this.handleSubmit}>
            
            <label >First Name</label>
            <input 
                type="text" 
                id="fname" 
                name="firstName" 
                value={this.state.user.firstName}
                onChange={this.inputForm}
                placeholder="Your first name.."
            />

            <label >Last Name</label>
            <input 
                type="text" 
                id="fname" 
                name="lastName" 
                value={this.state.user.lastName}
                onChange={this.inputForm}
                placeholder="Your last name.."
            />

            <label >Your Login</label>
            <input 
                type="text" 
                id="fname" 
                name="login" 
                value={this.state.user.login}
                onChange={this.inputForm}
                placeholder="Your login for access.."
            />    

            <Button isDisabled={this.isInvalidForm()} text="Add"></Button>
            
            { (this.state.isNewUser) ? "" : <div style={warning}> Ops, user existing whith this <b>first name</b></div>  }

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