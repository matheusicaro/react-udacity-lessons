import React, { Component } from 'react';
import ListContacts from './components/ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component {

  state = {
    contacts: []
  }
  
  componentDidMount() {
    
      ContactsAPI.getAll().then((contacts) => {
      
      this.setState(() => ({
        contacts
      }))
    })
  }
  
  removeContac = (contact)=> {

    this.setState( (currentState) => ({
      contacts: currentState.contacts.filter( (element)=>{
          return element.id != contact.id
      })

    }))
    ContactsAPI.remove(contact)

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
