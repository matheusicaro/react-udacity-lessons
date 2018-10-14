import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class ContactsList extends Component{

    static Prototype = {
        contacts: PropTypes.array.isRequired,         // contacts is type of array
        onDeleteContact: PropTypes.func.isRequired,   // onDeleteContact is type of function 
    }

    state = {
        query:""
    }

    updateQuery = (event) =>{
        this.setState( ()=> ({
            query: event
        }))
    }

    clearQuery = () =>{
        this.updateQuery('')
    }

    render(){

        const { query } = this.state;
        const { contacts, onDeleteContact } = this.props;

        const showContacts = (query === '') ? contacts : contacts.filter( element => (
                                element.name.toLowerCase().includes(query.toLocaleLowerCase())
                            ))

        return (
            <div className='list-contacts'>
               
                <div className='list-contacts-top'>
                    <input 
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={ query }
                        onChange={ (event)=> this.updateQuery(event.target.value) }>
                    </input>

                    <Link
                        to='/create'
                        className='add-contact'
                    >Add Contact</Link>
                </div>

                { showContacts.length !== contacts.length && (
                    
                    <div className='showing-contacts'>
                        <span>Now showing {showContacts.length} of {contacts.length},</span>
                        <button onClick={ this.clearQuery}> clear </button>
                    </div>
                )}

                <ol className="list-contacts">
                    {
                        showContacts.map( (element) =>(

                            <li key={ element.id } className='contact-list-item'>
                                <div 
                                    className='contact-avatar'
                                    style={{
                                        backgroundImage: `url( ${element.avatarURL} )`
                                    }}
                                ></div> 
                                
                                <div className='contact-details'>
                                    <p>{ element.name }</p>
                                    <p>@{ element.handle }</p>
                                </div>

                                <button
                                    onClick={ ()=> onDeleteContact(element) } 
                                    className='contact-remove'
                                >
                                    remove                      
                                </button>
                            </li>
                        ))
                    }
                </ol>
            </div>
        )
    }  
}

export default ContactsList