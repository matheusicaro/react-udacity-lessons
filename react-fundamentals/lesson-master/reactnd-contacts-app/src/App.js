import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContatsForm from './components/ContatsForm';

import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component {

  state = {
    contacts: [],
    screen:'contacts-list'
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

  onNavigate = (component) =>{

    this.setState( { screen: component} )

  }

  render() {
    const {screen} = this.state;

    return (
      <div onClick="" >
      
      { (screen === 'contacts-list') && (

          <ContactsList 
            contacts={ this.state.contacts }
            onDeleteContact={ this.removeContac }
            onNavigate={this.onNavigate}
          >
          </ContactsList>
      )}

      { (screen === 'contacts-form') && (

        <ContatsForm  onNavigate={this.onNavigate}></ContatsForm>
      )}

      </div>
    );
  }
}

export default App;
