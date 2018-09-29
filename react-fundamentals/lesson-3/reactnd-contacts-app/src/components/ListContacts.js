import React, { Component } from 'react'

class ListContacts extends Component {
    
    render(){

        console.log("props..:", this.props);
        
        return (
            <ol className="list-contacts">
                {
                    this.props.contacts.map( (element) =>(

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

                            <div className='contact-remove'>
                                remove                                
                            </div>
                            
                        </li>
                    ))
                }
            </ol>
        )
    }
}
export default ListContacts