import React, { Component } from 'react';
import { connect } from 'react-redux'

class Leaderitem extends Component {

  render() {


    return (
            <div className="row">                                                                                                                   
                <div className='col-md-12'> 
                    <div className="row">                                       
                        <div className='leader-img col-md-2'>
                            <img src={this.props.user.avatarURL} className="rounded" alt="Your Pic" height="80px" width="80px"/>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className='col-md-12'>
                                    <div className="row">
                                        <div className='col-md-12'>
                                            <div className="row">
                                                <div className='leader-name-id col-md-6'>Name: {this.props.user.name}</div>                                                                
                                                <div className='leader-name-id  col-md-6'>Login Id: {this.props.user.id}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-md-12'>
                                            <div className="row">
                                                <div className='leader-ans-ask col-md-6'>Number of Votes the user Asked: {this.props.user.questions.length}</div>                                                            
                                                <div className='leader-ans-ask  col-md-6'>Number of Votes the user Answered: {Object.keys(this.props.user.answers).length}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                                                                       
                        </div>
                    </div>                                            
                </div>
            </div>                                                                                                                                                            
    )
  }
}

function mapStateToProps ({ users }, { id }) {

    return {
      user: users[id],   
    }
  }

export default connect(mapStateToProps)(Leaderitem)  