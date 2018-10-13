import React from 'react'

const Button = (props)=>{
    
    

    return(
        <button disabled={props.isDisabled} >{props.text}</button>
    )

}

export default Button