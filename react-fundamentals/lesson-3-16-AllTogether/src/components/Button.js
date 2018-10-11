import React from 'react'

const Button = ({isDisabled, text})=>{
    return(
        <button disabled={isDisabled} >{text}</button>
    )

}

export default Button