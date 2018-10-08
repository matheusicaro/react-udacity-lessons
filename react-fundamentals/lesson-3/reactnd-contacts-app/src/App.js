import React, { Component } from 'react';
import ListContacts from './components/ListContacts';

class App extends Component {

  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  
  removeContac = (contact)=> {

    this.setState( (currentState) => ({
      contacts: currentState.contacts.filter( (element)=>{
          return element.id != contact.id
      })

    }))
  }

  render() {
    return (
      <div onClick="" >
        <ListContacts 
          contacts={ this.state.contacts }
          onDeleteContact={ this.removeContac }
        >
        </ListContacts>
      </div>
    );
  }
}

export default App;
