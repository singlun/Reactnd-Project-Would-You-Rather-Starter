import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import NavItem from './NavItem';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Quest from './Quest';
import NewQuestion from './NewQuestion';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  state = {
    isSwitchChecked: false,
  }

  onSwitchChange = () => this.setState({isSwitchChecked: !this.state.isSwitchChecked});

  componentDidMount(){

    this.props.dispatch(handleInitialData())

  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <LoadingBar />            
            {this.props.loading === true
              ? null
              : 
                <div>
                  <NavItem/>
                    <div>
                      <Route exact path='/' render={() => (
                        <Dashboard
                        switchChecked={this.state.isSwitchChecked}
                        onSwitchChange={this.onSwitchChange}
                        page={'Dashboard'}/>
                      )} />
                      
                      <Route exact path='/Quest/:id/:page/:switchChecked' component={Quest} />
                      
                      <Route exact path='/NewQuestion' component={NewQuestion} />                              

                      <Route exact path='/Leaderboard' component={Leaderboard} /> 
                    </div>
                </div>
            }
        </React.Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ autheduser, users }) {
  return {
    loading: autheduser === null,
    user: users[autheduser],   
  }
}

export default connect(mapStateToProps)(App)