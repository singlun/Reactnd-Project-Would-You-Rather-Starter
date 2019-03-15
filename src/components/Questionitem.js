import React, { Component } from "react";
import { formatDate } from '../utils/helpers'
import { Redirect } from 'react-router-dom'

class QuestionItem extends Component {

  state = {
    toHome: false,
  }


  handleSubmit = (e,qid) =>{


    this.props.onhandleAddAnsQuestion(e)

    this.setState(() => ({
      toHome: true,
    }))      
  }

  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }       

    const { id, question, user, page, displayQuestion, switchChecked, autheduser } = this.props
    
    const  rowWidth  = "col-md-6"
    const  itemWidth  = "col-md-12 single-item noPadding"
    let titlecolor 

    if (switchChecked === true) {
      titlecolor  = "top selectedtitle"
    }
    else {
      titlecolor  = "top notselectedtitle"
    } 

    const questionId = id

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

export default QuestionItem