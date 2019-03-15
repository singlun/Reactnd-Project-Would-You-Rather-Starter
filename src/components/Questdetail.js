import React, { Component } from 'react';
import Questionitem from './Questionitem';
import { connect } from 'react-redux';
import { handleAddAnsQuestion } from '../actions/questions'

class Questdetail extends Component {


  onhandleAddAnsQuestion = (e) =>{

    let answer;
    if (e.target.id === 'optionOne') {
       answer = 'optionOne'
    }
    else {
       answer = 'optionTwo'      
    }
    const {dispatch, autheduser, id} = this.props

    dispatch(handleAddAnsQuestion(autheduser.id, id, answer))      
  }

  render() {

    return (
            <React.Fragment>
                <div className="container">            
                    <div className="row"> 
                            <Questionitem {...this.props} displayQuestion={'one'} onhandleAddAnsQuestion={this.onhandleAddAnsQuestion} />
                            <Questionitem {...this.props} displayQuestion={'two'} onhandleAddAnsQuestion={this.onhandleAddAnsQuestion}/>   
                    </div>
                    <br />                    
                </div>
            </React.Fragment>   
    )
  }
}

function mapStateToProps ({ autheduser, users, questions }, props ) {
    const id = props.match.params.question_id
    const question = questions[id]
    const user = users[autheduser]
    const answeredId = Object.keys(user.answers).filter(ua => ua === id) 
    const displayPage =  (answeredId.length > 0) ? 'Result' : 'Question'    
        
    return {
      id: id,
      question: question,
      user: users[question.author],
      autheduser: users[autheduser],
      page: displayPage,
      switchChecked: (answeredId.length > 0) ? true : false,
    }
  }
  export default connect(mapStateToProps)(Questdetail)
