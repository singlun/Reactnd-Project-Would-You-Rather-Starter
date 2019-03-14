import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers'

class Question extends Component {


  render() {

    const { question, user, page,  switchChecked, autheduser } = this.props
    
    const  rowWidth  =  "col-md-4" 
    const  itemWidth  = "col-md-12 single-item noPadding"
    let titlecolor 

    if (switchChecked === true) {
      titlecolor  = "top selectedtitle"
    }
    else {
      titlecolor  = "top notselectedtitle"
    } 
    
    return (                                      
            <div className={rowWidth}>
            <Link to ={`/questions/${question.id}`}>
                    <div className={itemWidth}>  
                            <div className={titlecolor}>
                                {question.author}
                            </div>                         
                            <div className="bottom">
                                <div className="poll">1. {question.optionOne.text}.
                                                         {(autheduser.answers[question.id] === "optionOne") ? <span className="typicons-tick small-selected"></span> : ""}
                                </div><br/><br/><br/>                                          
                                <div className="poll2">2. {question.optionTwo.text}.
                                                          {(autheduser.answers[question.id] === "optionTwo") ? <span className="typicons-tick small-selected"></span> : ""}
                                </div>                                                    
                            </div>                                                
                            <div className="poll-footer">
                                <img src={user.avatarURL} width="70px" /><span className="submitInfo">Question Created on {formatDate(question.timestamp)}</span>
                            </div>                        
                    </div>
              </Link>             
            </div>
    )
  }
}

function mapStateToProps ({autheduser, users, questions}, { id }) {

    const question = questions[id]
    const user = users[autheduser]
    const answeredId = Object.keys(user.answers).filter(ua => ua === id) 
        
    return {
      question: question,
      user: users[question.author],
      autheduser: users[autheduser],
      switchChecked: (answeredId.length > 0) ? true : false,
    }
  }
  export default connect(mapStateToProps)(Question)