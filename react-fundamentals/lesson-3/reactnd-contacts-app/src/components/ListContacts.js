import React from 'react'
import PropTypes from 'prop-types';

function ListContacts (props) {
         
        return (
            <ol className="list-contacts">
                {
                    props.contacts.map( (element) =>(

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
                                onClick={ ()=>props.onDeleteContact(element) } 
                                className='contact-remove'
                            >
                                remove                      
                            </button>
                            
                        </li>
                    ))
                }
            </ol>
        )
}

ListContacts.prototype = {
    contacts: PropTypes.array.isRequired,         // contacts is type of array
    onDeleteContact: PropTypes.func.isRequired,   // onDeleteContact is type of function 
}

export default ListContacts