import React, { Component  } from "react";

class ContatsForm extends Component{

    
    render() {
        const { onNavigate } = this.props;
        return (
            <div>
                Create Contact

                
                <button
                        href='#create'
                        onClick={ (event)=> onNavigate('contacts-list')}
                        className='add-contact'
                    >Add Contact</button>
            </div>
        )
    }
}

export default ContatsForm