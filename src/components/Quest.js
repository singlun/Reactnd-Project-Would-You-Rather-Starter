import React, { Component } from 'react';
import Question from './Question';
import Homepage from './Homepage';
import { Route, Link } from 'react-router-dom';


class Quest extends Component {
  render() {


    const { question_id } = this.props.match.params

    const match = {'question_id': question_id}

    return (
        <React.Fragment>
            <div className="container">            
                <div className="row"> 

                        {/*This is the main problem*
                          How can you suppose to send 2 component in 2 routes*/} 
                          
                        {/* <Question match={question_id} id={question_id} displayQuestion={'one'} /> */}
                        {/* <Question match={match} id={question_id} displayQuestion={'two'} /> */}
                        <Route path="/questions/:question_id" render = {props => <Question {...props} /> } /> />
                        
                </div>
                <br />                    
            </div>
        </React.Fragment>
    )
  }
}

export default Quest;
