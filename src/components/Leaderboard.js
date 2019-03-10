import React, { Component } from 'react';
import Leaderitem from './Leaderitem';
import { connect } from 'react-redux'

class Leaderboard extends Component {

  render() {
    const {keysSorted} = this.props
    return (
          <div className='container'>
                    <div className='row'>                                                             
                        <div className='col-md-12  leader-item'>  
                            <div className='row'>
                                <div className='leader-top col-md-12 leaderboardtitle'>
                                        LeaderBoard
                                </div> 
                            </div>
                            {keysSorted.map((uid, key) => (
                                  <Leaderitem id={uid.id} key={key} />
                            ))}
                        </div>                                                
                    </div>                
            </div>
        )
  }
}

function mapStateToProps ({ users }) {

  let prepairedObj = {};

  prepairedObj = Object.keys(users).map(u => { 
    return {'id' : u, 'Sum' : users[u].questions.length + Object.keys(users[u].answers).length}
  })

  let keysSorted = Object.keys(prepairedObj).sort(function(a,b){return prepairedObj[b].Sum-prepairedObj[a].Sum}).map(key => prepairedObj[key])

  return {
    users, 
    keysSorted, 
  }
}

export default connect(mapStateToProps)(Leaderboard)  