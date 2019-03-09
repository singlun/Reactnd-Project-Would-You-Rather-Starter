import React, { Component } from 'react';
import Leaderitem from './Leaderitem';
import { connect } from 'react-redux'

class Leaderboard extends Component {

  render() {

    return (
          <div className='container'>
                    <div className='row'>                                                             
                        <div className='col-md-12  leader-item'>  
                            <div className='row'>
                                <div className='leader-top col-md-12 leaderboardtitle'>
                                        LeaderBoard
                                </div> 
                            </div>
                            {Object.keys(this.props.users).map((id, key) => (
                                  <Leaderitem id={id} key={key} />
                            ))}
                        </div>                                                
                    </div>                
            </div>
        )
  }
}

function mapStateToProps ({ users }) {

  return {
    users,   
  }
}

export default connect(mapStateToProps)(Leaderboard)  