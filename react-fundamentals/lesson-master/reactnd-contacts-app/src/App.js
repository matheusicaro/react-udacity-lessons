import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContatsForm from './components/ContatsForm';
import { Route } from 'react-router-dom'

import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {

  state = {
    contacts: [],
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

  createContact = (contact) => {
    ContactsAPI.create(contact)
      .then((contact) => {
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
      })
  }

  render() {
    const {screen} = this.state;

    return (
      <div onClick="" >
      
        <Route exact path='/' render={() => (

            <ContactsList 
              contacts={ this.state.contacts }
              onDeleteContact={ this.removeContac }
            >
            </ContactsList>
        )}/>

        <Route path='/create' render={({ history }) => (
          <ContatsForm
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />

      </div>
    );
  }
}

export default App;
