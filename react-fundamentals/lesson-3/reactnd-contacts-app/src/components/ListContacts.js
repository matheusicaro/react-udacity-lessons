import React from 'react'

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
export default ListContacts