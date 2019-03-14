import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers'
import { handleAddAnsQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Question extends Component {

  state = {
    toHome: false,
  }

  handleSubmit = (e,qid) =>{
    let answer;
    if (e.target.id === 'optionOne') {
       answer = 'optionOne'
    }
    else {
       answer = 'optionTwo'      
    }
    const {dispatch, autheduser} = this.props

    dispatch(handleAddAnsQuestion(autheduser.id, qid, answer))  

    this.setState(() => ({
      toHome: true,
    }))      
  }

  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }       

    const { question, user, page, displayQuestion, switchChecked, autheduser } = this.props
    
    const  rowWidth  = (page === "Dashboard") ? "col-md-4" : "col-md-6"
    const  itemWidth  = "col-md-12 single-item noPadding"
    let titlecolor 

    if (switchChecked === true) {
      titlecolor  = "top selectedtitle"
    }
    else {
      titlecolor  = "top notselectedtitle"
    } 

    const questionId = question.id

    const noOfOptionOneVotes = question.optionOne.votes.length
    const noOfOptionTwoVotes = question.optionTwo.votes.length
    let pertageOneOption = ((parseInt(noOfOptionOneVotes) / (parseInt(noOfOptionOneVotes) + parseInt(noOfOptionTwoVotes))) * 100).toFixed(2)
    let pertageTwoOption = ((parseInt(noOfOptionTwoVotes) / (parseInt(noOfOptionOneVotes) + parseInt(noOfOptionTwoVotes))) * 100).toFixed(2)

    if (pertageOneOption === 'NaN' || pertageTwoOption === 'NaN'){
      pertageOneOption = 0
      pertageTwoOption = 0
    }

    
    return (                                      
            <div className={rowWidth}>
            
                    <div className={itemWidth}>  

                        {(page === "Dashboard") && 
                                (
                                  <div className={titlecolor}>
                                      {question.author}
                                  </div>                         
                                )}

                        {(page === "Question" || page === "Result") && 
                                ( 
                                  (displayQuestion === "one") ?                                
                                      <div className={(autheduser.answers[question.id] === "optionOne") ? "top selectedtitle" : "top notselectedtitle"}>
                                         {(page === "Question") ?  `Choose Question - ${displayQuestion}` : `Question - ${displayQuestion}`}
                                      </div>                   
                                        :
                                      <div className={(autheduser.answers[question.id] === "optionTwo") ? "top selectedtitle" : "top notselectedtitle"}>
                                         {(page === "Question") ?  `Choose Question - ${displayQuestion}` : `Question - ${displayQuestion}`}
                                      </div>                                       
                                )}                                                                      
                                                                    
                        
                        {(page === "Dashboard") && 
                            (
                            <div className="bottom">
                                <div className="poll">1. {question.optionOne.text}.
                                                         {(autheduser.answers[question.id] === "optionOne") ? <span className="typicons-tick small-selected"></span> : ""}
                                </div><br/><br/><br/>                                          
                                <div className="poll2">2. {question.optionTwo.text}.
                                                          {(autheduser.answers[question.id] === "optionTwo") ? <span className="typicons-tick small-selected"></span> : ""}
                                </div>                                                    
                            </div>                        
                            )}

                          {(page === "Result") && (                              
                                  <div className="bottom">
                                      <div className='poll'>{(displayQuestion === "one") ? question.optionOne.text : question.optionTwo.text}
                                                            {
                                                              (displayQuestion === "one") ?
                                                                    
                                                                      (autheduser.answers[question.id] === "optionOne") ?
                                                                              <span className="typicons-tick selected"> (Over all Votes {noOfOptionOneVotes} / {pertageOneOption}%)</span>
                                                                           :  
                                                                          <span>(Over all Votes {noOfOptionOneVotes} / {pertageOneOption}%)</span>                                                                    
                                                                  :
                                                                    (autheduser.answers[question.id] === "optionTwo") ? 
                                                                          <span className="typicons-tick selected">(Over all Votes {noOfOptionTwoVotes} / {pertageTwoOption}%)</span> 
                                                                          : 
                                                                          <span>(Over all Votes {noOfOptionTwoVotes} / {pertageTwoOption}%)</span>                                                                    
                                                            }
                                      </div><br></br>                                                                                        
                                  </div> 
                            )}


                          {(page === "Question") && (                              
                                  <div className="bottom">
                                      <div className='poll'>
                                          {(displayQuestion === "one") ?
                                            <span>
                                               {question.optionOne.text }
                                               (Over all Votes {noOfOptionOneVotes} / {pertageOneOption}%)
                                            </span>
                                          : 
                                            <span>
                                               {question.optionTwo.text}
                                               (Over all Votes {noOfOptionTwoVotes} / {pertageTwoOption}%)                                       
                                            </span>}
                                      </div><br></br>                                                                                          
                                  </div>                  
                          )}                            

                            <div className="poll-footer">
                                <img src={user.avatarURL} width="70px" /><span className="submitInfo">Question Created on {formatDate(question.timestamp)}</span>
                            </div>                        


                        {(page === "Question") && 
                            ((displayQuestion === "one") ?                                
                              <div className='poll-base'>
                                  <button id="optionOne" className="btn btn-success" onClick={(e) => this.handleSubmit(e,questionId)}>Click to Choose</button>
                              </div>                   
                                :
                              <div className='poll-base'>
                                <button id="optionTwo" className="btn btn-success" onClick={(e) => this.handleSubmit(e,questionId)}>Click to Choose</button>
                              </div>   
                            )}
                    </div>
             
            </div>
    )
  }
}

function mapStateToProps ({autheduser, users, questions}, props) {
    {/*There is anther problem in reloading the page. Clicking the props can be recevie when
      clicking the link  <Link to ={`/questions/${question.id}`}> from the Displayquestion component
      but reloading the page cannot receive the props.*/}
    const qid = props.match.params.question_id
    const question = questions[qid]
    const user = users[autheduser]
    const answeredId = Object.keys(user.answers).filter(ua => ua === qid) 
    const displayPage =  (answeredId.length > 0) ? 'Result' : 'Question'    
        
    return {
      question: question,
      user: users[question.author],
      autheduser: users[autheduser],
      page: displayPage,
      switchChecked: (answeredId.length > 0) ? true : false,
    }
  }
  export default connect(mapStateToProps)(Question)