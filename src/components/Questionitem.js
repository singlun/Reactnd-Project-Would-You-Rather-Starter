import React, { Component } from "react";
import { formatDate } from '../utils/helpers'
import NoMatch from './NoMatch';
import { connect } from 'react-redux';
import { handleAddAnsQuestion } from '../actions/questions'

class QuestionItem extends Component { 

  state = {
    toHome: false,
  }


//   handleSubmit = (e) =>{


//     this.props.onhandleAddAnsQuestion(e)

//     this.setState(() => ({
//      toHome: true,
//    }))      
//  }


  handleSubmit = (e) =>{

  let answer;
  if (e.target.id === 'optionOne') {
      answer = 'optionOne'
  }
  else {
      answer = 'optionTwo'      
  }
  const {dispatch, autheduser, question_id} = this.props

    dispatch(handleAddAnsQuestion(autheduser.id, question_id, answer))      
  } 

  render() {

    const { question_id, displayPage, user, question, autheduser} =  this.props

    const  rowWidth  = "col-md-6"
    const  itemWidth  = "col-md-12 single-item noPadding"
    let titlecolor 
    let noOfOptionOneVotes, noOfOptionTwoVotes, pertageOneOption, pertageTwoOption

    if (typeof question !== "undefined") {
            noOfOptionOneVotes = question.optionOne.votes.length
            noOfOptionTwoVotes = question.optionTwo.votes.length
            pertageOneOption = ((parseInt(noOfOptionOneVotes) / (parseInt(noOfOptionOneVotes) + parseInt(noOfOptionTwoVotes))) * 100).toFixed(2)
            pertageTwoOption = ((parseInt(noOfOptionTwoVotes) / (parseInt(noOfOptionOneVotes) + parseInt(noOfOptionTwoVotes))) * 100).toFixed(2)

            if (pertageOneOption === 'NaN' || pertageTwoOption === 'NaN'){
              pertageOneOption = 0
              pertageTwoOption = 0
            }
    }

    return (

      ((this.props.id !== '') ? (  

      
        (typeof question === "undefined") ?
            <NoMatch />
        :           
        (
         <div className="container">            
               <div className="row"> 
                    <div className={rowWidth}>                      
                            <div className={itemWidth}>  
                                {(displayPage === "Question" || displayPage === "Result") &&                                                                     
                                              <div className={(autheduser.answers[question.id] === "optionOne") ? "top selectedtitle" : "top notselectedtitle"}>
                                                Choose Question One
                                              </div>                                                         
                                        }

                                  {(displayPage === "Result") && (                              
                                          <div className="bottom">
                                              <div className='poll'>{ question.optionOne.text}
                                                                    {                                                                          
                                                                      (autheduser.answers[question.id] === "optionOne") ?
                                                                              <span className="typicons-tick selected"> (Over all Votes {noOfOptionOneVotes} / {pertageOneOption}%)</span>
                                                                          :  
                                                                          <span>(Over all Votes {noOfOptionOneVotes} / {pertageOneOption}%)</span>                                                                                                                                      
                                                                    }
                                              </div><br></br>                                                                                        
                                          </div> 
                                    )}


                                  {(displayPage === "Question") && (                              
                                          <div className="bottom">
                                              <div className='poll'>
                                                  {
                                                    <span>
                                                      { question.optionOne.text}
                                                      (Over all Votes {noOfOptionOneVotes} / {pertageOneOption}%)
                                                    </span>
                                                  }
                                              </div><br></br>                                                                                          
                                          </div>                  
                                  )}                            

                                    <div className="poll-footer">
                                        <img src={user.avatarURL} width="70px" /><span className="submitInfo">Question Created on {formatDate(question.timestamp)}</span>
                                    </div>                        


                                {(displayPage === "Question") && 
                                    (                             
                                      <div className='poll-base'>
                                          <button id="optionOne" className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Click to Choose</button>
                                      </div>                   
                                    )}
                            </div>             
                    </div>
                    <div className={rowWidth}>
                    
                    <div className={itemWidth}>  


                                    {(displayPage === "Question" || displayPage === "Result") &&                                                                     
                                                  <div className={(autheduser.answers[question.id] === "optionTwo") ? "top selectedtitle" : "top notselectedtitle"}>
                                                    Choose Question Two
                                                  </div>                                                         
                                            }

                                    {(displayPage === "Result") && (                              
                                          <div className="bottom">
                                              <div className='poll'>{ question.optionTwo.text}
                                                                    {                                                                          
                                                                      (autheduser.answers[question.id] === "optionTwo") ?
                                                                              <span className="typicons-tick selected"> (Over all Votes {noOfOptionTwoVotes} / {pertageTwoOption}%)</span>
                                                                          :  
                                                                          <span>(Over all Votes {noOfOptionTwoVotes} / {pertageTwoOption}%)</span>                                                                                                                                      
                                                                    }
                                              </div><br></br>                                                                                        
                                          </div> 
                                    )}


                                  {(displayPage === "Question") && (                              
                                          <div className="bottom">
                                              <div className='poll'>
                                                  {
                                                    <span>
                                                      { question.optionTwo.text}
                                                      (Over all Votes {noOfOptionTwoVotes} / {pertageTwoOption}%)
                                                    </span>
                                                  }
                                              </div><br></br>                                                                                          
                                          </div>                  
                                  )}                            

                            <div className="poll-footer">
                                <img src={user.avatarURL} width="70px" /><span className="submitInfo">Question Created on {formatDate(question.timestamp)}</span>
                            </div>                        


                        {(displayPage === "Question") && 
                            (                             
                              <div className='poll-base'>
                                  <button id="optionTwo" className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Click to Choose</button>
                              </div>                   
                            )}
                    </div>             
                </div>               
           </div>
        </div>
      )
        ) 
     :
     <NoMatch />
    ))
  }
}

function mapStateToProps ({ autheduser, users, questions }, props) {  
  const id = props.match.params.question_id
  let question, user    
    question = questions[id]
    const author = {...questions[id]}.author    
    user = users[author]
    autheduser = users[autheduser]
    const userAuthor = {...autheduser}    
    const answeredId = Object.keys({...userAuthor['answers']}).filter(ua => ua === id) 
    const displayPage =  (answeredId.length > 0) ? 'Result' : 'Question'     
  
  return {
    question_id: id,
    question: question,
    user: user,
    questions,
    users,    
    autheduser: autheduser,
    displayPage: displayPage,
  }
}
export default connect(mapStateToProps)(QuestionItem)