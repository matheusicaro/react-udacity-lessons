import React, { Component  } from "react";
import { Link } from 'react-router-dom'
import ImageInput from '../utils/ImageInput'
import serializeForm from 'form-serialize'

class ContatsForm extends Component{

    handleSubmit = (e) => {
        e.preventDefault()
        
        const values = serializeForm(e.target, { hash: true })
         if (this.props.onCreateContact) {
          this.props.onCreateContact(values)
        }
    }

    render() {
        const { onNavigate } = this.props;
        return (
            <div>
                <Link to='/' className='close-create-contact'> Add Contact </Link>
                
                <form onSubmit={this.handleSubmit} className='create-contact-form'>
                    <ImageInput
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxHeight={64}
                    />
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='Name' />
                        <input type='text' name='handle' placeholder='Handle' />
                        <button>Add Contact</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default ContatsForm