import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {
  render() {

    const { question, user, page, displayQuestion, switchChecked } = this.props
    
    const  rowWidth  = (page === "Dashboard") ? "col-md-4" : "col-md-6"
    const  itemWidth  = "col-md-12 single-item noPadding"
    let pageDisplay, titlecolor 

    if (switchChecked === 'true' || switchChecked === true) {
      pageDisplay  = "Result"
      titlecolor  = "top selectedtitle"
    }
    else {
      pageDisplay  = "Question"
      titlecolor  = "top notselectedtitle"
    } 

    return (                                      
            <div className={rowWidth}>
            <Link to ={`/Quest/${question.id}/${pageDisplay}/${switchChecked}`}>
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
                                      <div className={(user.answers[question.id] === "optionOne") ? "top selectedtitle" : "top notselectedtitle"}>
                                         {(page === "Question") ?  `Choose Question - ${displayQuestion}` : `Question - ${displayQuestion}`}
                                      </div>                   
                                        :
                                      <div className={(user.answers[question.id] === "optionTwo") ? "top selectedtitle" : "top notselectedtitle"}>
                                         {(page === "Question") ?  `Choose Question - ${displayQuestion}` : `Question - ${displayQuestion}`}
                                      </div>                                       
                                )}                                                                      
                                                                    
                        
                        {(page === "Dashboard") && 
                            (
                            <div className="bottom">
                                <div className="poll">1. {question.optionOne.text}.
                                                         {(user.answers[question.id] === "optionOne") ? <span className="typicons-tick small-selected"></span> : ""}
                                </div><br/><br/><br/>                                          
                                <div className="poll2">2. {question.optionTwo.text}.
                                                          {(user.answers[question.id] === "optionTwo") ? <span className="typicons-tick small-selected"></span> : ""}
                                </div>                                                    
                            </div>                        
                            )}

                          {(page === "Result") && 
                            ((displayQuestion === "one") ?                                
                                  <div className="bottom">
                                      <div className='poll'>{(displayQuestion === "one") ? question.optionOne.text : question.optionTwo.text}
                                                            {(user.answers[question.id] === "optionOne") ? <span className="typicons-tick small-selected"></span> : ""}
                                      </div><br></br>                                         
                                      <div className='clearfix'></div>                                                   
                                  </div>                  
                                :
                                  <div className="bottom">
                                      <div className='poll'>{(displayQuestion === "two") ? question.optionOne.text : question.optionTwo.text}
                                                            {(user.answers[question.id] === "optionTwo") ? <span className="typicons-tick small-selected"></span> : ""}
                                      </div><br></br>                                         
                                  <div className='clearfix'></div>                                                   
                            </div>  
                            )}


                          {(page === "Question") && (                              
                                  <div className="bottom">
                                      <div className='poll'>{(displayQuestion === "one") ? question.optionOne.text : question.optionTwo.text}                                                         
                                      </div><br></br>                                         
                                      <div className='clearfix'></div>                                                   
                                  </div>                  
                          )}                            

                            <div className="poll-footer">
                                <img src={user.avatarURL} width="70px" /><span className="submitInfo">Submitted on Jan-20-2019</span>
                            </div>                        


                        {/* {(page !== "Dashboard") && 
                            ((displayQuestion === "one") ?                                
                              <div className='poll-footer'>
                                  <span className={(user.answers[question.id] === "optionOne") ? "typicons-tick selected" : "typicons-tick notselected"}></span>  
                              </div>                   
                                :
                              <div className='poll-footer'>
                                <span className={(user.answers[question.id] === "optionTwo") ? "typicons-tick selected" : "typicons-tick notselected"}></span>  
                              </div>   
                            )} */}
                    </div>
              </Link> 
            </div>
    )
  }
}

function mapStateToProps ({autheduser, users, questions}, { id, page, switchChecked }) {
    const question = questions[id]
    
    return {
      autheduser,
      question: question,
      user: users[autheduser],
      page: page,
      switchChecked: switchChecked,
    }
  }
  export default connect(mapStateToProps)(Question)