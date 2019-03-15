import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Displayquestion from "./Dashboardquestion";


class Dashboard extends Component {        
  render() {    
        
    return (
           <div className="container"> 
                <div className="row">                        
                        <div className="col-md-11">
                                <div className={"switch-item noPadding"}>  
                                        <div className="onoffswitch">
                                                <input type="checkbox" checked={this.props.switchChecked} name="onoffswitch"  onChange={this.props.onSwitchChange} className="onoffswitch-checkbox" id="myonoffswitch" />
                                                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                                                        <span className="onoffswitch-inner"></span>
                                                        <span className="onoffswitch-switch"></span>
                                                </label>
                                        </div>
                                </div>                                
                        </div>
                        <div className="col-md-1">                                
                                <Link to='/add'><span className="iconicstroke-document-alt-stroke"></span></Link> 
                        </div>                                                        
                </div>
                <div className="row">  
                        {this.props.questionIds.map((id, key) => (
                                        <Displayquestion id={id} key={key} />
                        ))}
                </div>
            </div>
    )
  }
}

function mapStateToProps ({ autheduser, users, questions }, { switchChecked, onSwitchChange }) {
        const answered = switchChecked
        const user = users[autheduser]
        let answeredId = [];
              
        if (answered) {
                answeredId = Object.keys(user.answers)               
        } 
        else {
                Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp).forEach(qid => {
                        let ans = Object.keys(user.answers).filter(uid => uid === qid);

                        if (ans.length === 0) {
                                answeredId.push([qid]);
                        }                                                
                });
        }     

        return {
          questionIds: answeredId
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
          switchChecked : switchChecked, 
          onSwitchChange: onSwitchChange,
          autheduser: autheduser,
        }
}
      
export default connect(mapStateToProps)(Dashboard)
