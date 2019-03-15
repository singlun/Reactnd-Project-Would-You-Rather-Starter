import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Dashboardquestion from './Dashboardquestion';
import Questdetail from './Questdetail';


class Displayquestion extends Component {
  render() {


    const { id, key } = this.props

    return (
            <div className="container">            
                <div className="row">                         
                        <Dashboardquestion id={id} key={key} page={'Dashboard'} />
                </div>
                <br />                    
            </div>
    )
  }
}

export default Displayquestion;
