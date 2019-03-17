import React, { Component } from 'react';
import Questionitem from './Questionitem';
import { connect } from 'react-redux';
import { handleAddAnsQuestion } from '../actions/questions'

class Questdetail extends Component {

  render() {

    return (
            <React.Fragment>
                   <Questionitem {...this.props} onhandleAddAnsQuestion={this.onhandleAddAnsQuestion}/>
            </React.Fragment>   
    )
  }
}

  export default Questdetail
