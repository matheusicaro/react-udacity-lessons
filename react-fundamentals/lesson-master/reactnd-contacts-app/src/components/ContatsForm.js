import React, { Component  } from "react";
import { Link } from 'react-router-dom'

class ContatsForm extends Component{

    
    render() {
        const { onNavigate } = this.props;
        return (
            <div>
                <Link to='/' className='close-create-contact'> Add Contact </Link>
                
                Create Contact

            </div>
        )
    }
}

export default ContatsForm