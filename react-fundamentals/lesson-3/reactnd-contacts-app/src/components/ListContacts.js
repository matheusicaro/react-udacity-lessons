import React, { Component } from 'react'

class ListContacts extends Component {
    
    render(){

        console.log("props..:", this.props);

        return (
            <ol className="list-contacts">

            </ol>
        )
    }
}
export default ListContacts