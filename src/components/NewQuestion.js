import React, { Component } from 'react';
import Question from './Questionitem';
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {

    state = {
        text1 : '',
        text2 : '',
        toHome: false,
      }
   
      handleChange = (e) => {
          
        const id = e.target.id;
        let text;
        text = e.target.value;

        if (id === 'q1') {            
            this.setState({
                text1: text
             })            
        }
        else {
            this.setState({
                text2: text
             })            
        }
      }
   
      handleSubmit = (e) =>{
          e.preventDefault();
          const { text1, text2 } = this.state
          const {dispatch, autheduser} = this.props
        
          dispatch(handleAddQuestion(text1, text2, autheduser))
   
          this.setState(() => ({
           text1: '',
           text2: '',
           toHome: true,
         }))      
      }

  render() {

    const {text1, text2, toHome} = this.state  


    if (toHome === true) {
        return <Redirect to='/' />
      }      

    return (
        <React.Fragment>
            <div className="container">
                    <div className="row">
                        <div className='col-md-2'></div>
                        <div className='col-md-8'>
                            <div className={"col-md-12 QuestionTitle"}>Please enter the Questions you want to Poll.</div>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                    <div className="row">
                            <div className='col-md-2'></div>
                            <div className='col-md-8'> 
                                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label className={"col-md-12 control-label"}>Question 1.</label>
                                                <div className="col-md-12">
                                                    <textarea 
                                                            id="q1"
                                                            placeholder='Question 1'
                                                            onChange={(e1) => this.handleChange(e1)}
                                                            value={text1} 
                                                            maxLength ={75}
                                                            className = 'form-control'
                                                            required
                                                            />                                                    
                                                </div>
                                                <div className="col-md-12"></div>							
                                            </div>
                                            <div className="form-group">   
                                                <label className={"col-md-12 control-label"}>Question 2.</label>
                                                <div className="col-md-12">
                                                <textarea 
                                                            id="q2"
                                                            placeholder='Question 2'
                                                            onChange={(e2) => this.handleChange(e2)}
                                                            value={text2} 
                                                            maxLength ={75}
                                                            className = 'form-control'
                                                            required
                                                            />   
                                                </div>
                                                <div className="col-md-12"></div>	
                                            </div>	
                                            <div className="form-group">
                                                <div className="col-md-12"></div>	
                                                <div className="col-md-12">
                                                    <button className={"btn btn-danger"}>Submit</button>														
                                                </div>
                                                <div className="col-md-12"></div>	
                                            </div>
                                    </form>
                            </div>
                            <div className='col-md-2'></div>
                    </div>
                    {/* <Question /> */}
            </div>
        </React.Fragment>
    )
  }
}

function mapStateToProps ({autheduser}) {
    return {
      autheduser: autheduser,
    }
  }  
  
  export default connect(mapStateToProps)(NewQuestion)
