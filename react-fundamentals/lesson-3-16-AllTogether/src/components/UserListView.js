import React from 'react'
import '../styles/style.css';

const UserListView = (props)=>{

    return(
        <div className="Component">
            
            <ol>
                { props.users.map(element =>(
                    <li>
                        {`${ element.firstName } - ${ element.lastName } - ${ element.login }`}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default UserListView 