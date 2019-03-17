import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'
import NavItem from './NavItem';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import NoMatch from './NoMatch';
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import QuestionItem from './Questionitem';
import Questdetail from './Questdetail';



class Homepage extends Component {

  state = {
    isSwitchChecked: false,
    }

  onSwitchChange = () => this.setState({isSwitchChecked: !this.state.isSwitchChecked});

  componentDidMount(){

    const {dispatch} = this.props
    dispatch(handleInitialData())
    
    }   

    onLogOutChange = () => {this.props.onLogOutChange()};

   render() {   

    return (
      <Router>
        <React.Fragment>
          <span>
          <LoadingBar />            
            {this.props.loading === true
              ? null
              : 
                <div>
                  <NavItem onLogOutChange={this.onLogOutChange} />
                    <div>
                        <Switch>                                                                                        
                              <Route exact path='/questions/:question_id' component={Questdetail}/>                              
                        

                              <Route exact path='/add' component={NewQuestion} />                              

                              <Route exact path='/Leaderboard' component={Leaderboard} />                              

                              <Route exact path='/' render={() => (
                                <Dashboard
                                switchChecked={this.state.isSwitchChecked}
                                onSwitchChange={this.onSwitchChange} />
                              )} />

                              <Route component={NoMatch} />

                        </Switch>
                    </div>
                </div>                
            }</span>
        </React.Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ autheduser }, {onLogOutChange}) {
  return {
    loading: autheduser === null,    
    onLogOutChange: onLogOutChange,
  }
}

export default connect(mapStateToProps)(Homepage)
