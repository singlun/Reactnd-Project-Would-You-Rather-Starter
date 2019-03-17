import React, { Component } from 'react';

class Login extends Component {
 

    onhandleChange = (e) => {

        e.preventDefault()

        const userName = document.getElementById('userName');

        sessionStorage.setItem('AUTHED_ID',userName.value);
    

        this.props.onLogInChange();
      }
    

  render() {

    return (
        <React.Fragment>
            <div className="jumbotron">
                    <div className="container">	
                        <h1>Welcome</h1>
                        <p>Would You Rather?</p>
                    </div> 
            </div>        
            <div className="container">							
                    <form className="form-horizontal" onSubmit={this.onhandleChange}>
                        <div className="form-group">
                            <label className={"col-md-4 control-label"}>Please Select a User to Login:</label>
                            <div className="col-md-4">
                                <select id='userName'>
                                     <option value={'sarahedo'}>{'Sarah Edo'}</option>
                                     <option value={'tylermcginnis'}>{'Tyler McGinnis'}</option>
                                     <option value={'johndoe'}>{'John Doe'}</option>                                   
                                </select>
                            </div>
                            <div className="col-md-4"></div>							
                        </div>	
                        <div className="form-group">
                            <div className="col-md-4"></div>	
                            <div className="col-md-4">
                                <button className={"btn btn-danger"}>Login</button>														
                            </div>
                            <div className="col-md-4"></div>	
                        </div>
                    </form>						                						
            </div> 
        </React.Fragment>      
    )
  }
}

export default Login
