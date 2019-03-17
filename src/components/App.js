import React, { Component } from 'react';
import Homepage from './Homepage';
import Login from './Login';
import './App.css';
import './switch.css';

class App extends Component {

  state = {
    isLoggedIn: false,
    key : false ,
    }

  onLogInChange = () => this.setState({isLoggedIn: true, key: !this.state.key});

  onLogOutChange = () => this.setState({isLoggedIn: false, key: !this.state.key});

   render() {
     
    sessionStorage.setItem('pagereload','true');

    return (
          //((sessionStorage.getItem('AUTHED_ID') !== null) && (this.state.isLoggedIn === true))  ?
          (sessionStorage.getItem('AUTHED_ID') !== null)  ?
              <Homepage key={this.state.key} onLogOutChange={this.onLogOutChange} />
            :
              <Login key={this.state.key} onLogInChange={this.onLogInChange}/>
    )
  }
}

export default App;