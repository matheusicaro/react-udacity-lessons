import React, { Component } from 'react';
import '../styles/style.css';

class UserListView extends Component{

    state = {
        isToShow: false
    }

    hideOrShow = () => {
        this.setState(currentState =>({
            isToShow: !currentState.isToShow
        })) 
    }

    buttonShowHide = (
        <div>
            <button className="smallButton" onClick={ this.hideOrShow }>
                Hide nº of games

            </button>
        </div>
    )

    render(){

        const {isToShow} = this.state;
        const {users} = this.props;

        return(
            <div className="Component">                
                
                { (users && users.length > 0) ? this.buttonShowHide : (<h2> 0 - items... </h2>)}   

                <ol>
                    { users.map(user =>(
                        <li key={user.firstName} >
                            {`${ user.firstName } ${ user.lastName } - `} 
                            {(isToShow) ? '(Hide the Number of Games Played)' : (`played ${user.numberOfGames} games`) }
                        </li>
                    ))}
                </ol>

            </div>
        )
    }
}

export default UserListView 