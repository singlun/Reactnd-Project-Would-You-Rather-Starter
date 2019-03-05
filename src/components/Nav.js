import React from "react"

export default function Nav () {

  return (         
        <nav className={"navbar navbar-expand-sm navbar-inverse"}>
            <div className="container-fluid">
                <ul className={"nav navbar-nav align-items-center"}>
                    <li className="nav-item">
                        <a className="navbar-brand" href="Dashboard.html">
                                <img src="me.jpg" className="rounded-circle profile-width" alt="Your Pic"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <h5><i>Welcome</i> <small>Tang Sing Lun</small></h5>
                    </li>
                </ul>
                <ul className={"nav navbar-nav align-items-center"}>
                        <li className="nav-item">
                            <h3><i>Would You Rather?</i></h3>
                        </li>
                    </ul>                        
                <ul className={"nav navbar-nav align-items-center"}>
                    <li className="nav-item searchbar">
                            <form className="form-inline">
                                <input className={"form-control mr-sm-2"} type="text" placeholder="Where you want to go?" />
                                <button className={"btn btn-success"} type="submit">Search</button>
                            </form>
                    </li> 				
                </ul>
            </div>
        </nav>
    )
}