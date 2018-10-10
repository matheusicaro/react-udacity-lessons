import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import UserAddHeader from './components/UserAddHeader'
import UserAdd from './components/UserAdd'
import UserListHeader from './components/UserListHeader'
import UserListView from './components/UserListView'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      
        <UserAddHeader ></UserAddHeader>
        <UserAdd></UserAdd>

        <UserListHeader></UserListHeader>
        <UserListView>
            button here
        </UserListView>

      </div>
    );
  }
}

export default App;
