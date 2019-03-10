import React, { Component } from 'react';
import Question from './Question';

class Quest extends Component {
  render() {


    const { id, page, switchChecked } = this.props.match.params

    return (
        <React.Fragment>
            <div className="container">            
                <div className="row">                            
                        <Question id={id} page={page} displayQuestion={'one'} switchChecked={switchChecked}/>
                        <Question id={id} page={page} displayQuestion={'two'} switchChecked={switchChecked}/>
                </div>
                <br />                    
            </div>
        </React.Fragment>
    )
  }
}

export default Quest;
