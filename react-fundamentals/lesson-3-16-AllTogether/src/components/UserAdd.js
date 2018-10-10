import React from 'react'
import Button from './Button'

import '../styles/style.css';

const UserAdd = ()=>{

    return(

        <form className="Component" action="">
            
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

            <label for="lname">Your Login</label>
            <input type="text" id="lname" name="lastname" placeholder="Your login for access.."/>
                        
            <Button text="Submit"></Button>
        </form>

    )

}

export default UserAdd