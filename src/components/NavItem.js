import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { handleLogOut } from '../actions/autheduser'

class NavItem extends Component {

    state = {
        toHome : false,
      }    

    handleSubmit = (e) =>{
        e.preventDefault();

        const {dispatch} = this.props
     
        dispatch(handleLogOut())

        sessionStorage.clear();

        this.props.onLogOutChange(); 
         
    }    

render() {  

    const {user, autheduser} = this.props

    const  navStyle  = "navbar navbar-expand-sm navbar-inverse"
    const  navUlStyle  = "nav navbar-nav align-items-center"
    const  navSearchStyle  = "nav-item searchbar"
    const  navFormStyle  = "form-control mr-sm-2"
    const  navBtnStyle  = "btn btn-success"
    const  navImg = "rounded-circle profile-width"
  return (    
        <nav className={navStyle}>
            <div className="container-fluid">
                <ul className={navUlStyle}>
                    <li className="nav-item">
                                <img src={user.avatarURL} className="rounded-circle"  width="70px" alt="Your Pic"/>&nbsp;
                    </li>
                    <li className="nav-item">&nbsp;</li>
                    <li className="nav-item">
                        <h5><i>Welcome</i></h5>                       
                    </li>
                    <li className="nav-item">&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        <h5><small>{user.name}</small></h5>
                    </li>
                    <li className="nav-item">&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        <h5><small><Link to='/'>Home</Link></small></h5>                       
                    </li>  
                    <li className="nav-item">&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        <h5><small><Link to='/Leaderboard'>Leaderboard</Link></small></h5>                       
                    </li>                                                           
                </ul>
                <ul className={navUlStyle}>
                        <li className="nav-item">
                            <h3><i>Would You Rather?</i></h3>
                        </li>
                    </ul>                        
                <ul className={navUlStyle}>
                    <li className={navSearchStyle}>
                            <form className="form-inline" onSubmit={this.handleSubmit}>
                                <button className={navBtnStyle} type="submit" >Log-Out</button>
                            </form>
                    </li> 				
                </ul>
            </div>
        </nav>
    )
  }
}



function mapStateToProps ({ users, autheduser }, {onLogOutChange}) {
    return {      
        user: users[autheduser], 
        autheduser,
        onLogOutChange: onLogOutChange,
    }
  }
  
  export default connect(mapStateToProps)(NavItem)