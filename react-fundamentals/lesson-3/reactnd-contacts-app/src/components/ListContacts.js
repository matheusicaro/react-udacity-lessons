import React, { Component } from 'react'

class ListContacts extends Component {
    
    render(){

        console.log("props..:", this.props);
        
        return (
            <ol className="list-contacts">
                {   this.props.contacts.map(element =>(
                        <li key={ element.id }>
                            {element.name}
                        </li>
                    ))
                }
            </ol>
        )

    }
}
export default ListContacts