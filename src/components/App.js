import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Homepage from './Homepage';
import Login from './Login';



class App extends Component {

  state = {
    isLoggedIn: false,
    key : false ,
    }

  onLogInChange = () => this.setState({isLoggedIn: true, key: !this.state.key});

  onLogOutChange = () => this.setState({isLoggedIn: false, key: !this.state.key});

   render() { 
    
    return (
      <Router>
          {(this.state.isLoggedIn) ?
              <Homepage key={this.state.key} onLogOutChange={this.onLogOutChange}/>
            :
              <Login key={this.state.key} onLogInChange={this.onLogInChange}/>}
      </Router>
    )
  }
}

export default App;