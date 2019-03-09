import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NavItem extends Component {

render() {
    const {user} = this.props
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
                                <img src={user.avatarURL} className="rounded-circle profile-width" alt="Your Pic"/>&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                    <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        <h5><i>Welcome</i></h5>                       
                    </li>
                    <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        <h5><small>{user.name}</small></h5>
                    </li>
                    <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        <h5><small><Link to='/'>Home</Link></small></h5>                       
                    </li>  
                    <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
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
                            <form className="form-inline">
                                <input className={navFormStyle} type="text" placeholder="Where you want to go?" />
                                <button className={navBtnStyle} type="submit">Search</button>
                            </form>
                    </li> 				
                </ul>
            </div>
        </nav>
    )
  }
}



function mapStateToProps ({ autheduser, users }) {
    return {      
        user: users[autheduser], 
    }
  }
  
  export default connect(mapStateToProps)(NavItem)