// used rfc react fucntion based component
import React from 'react'; // shortcut imrs
import {
 Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>{props.About}</Link>
        </li>
        
      </ul>
      {/* template string or literals */}
   <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>   
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >{props.modeButton}</label>
</div>

{/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </LInk>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</LInk></li>
            <li><Link className="dropdown-item" to="/">Another action</LInk></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</LInk></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</LInk>
        </li> */}
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>


  )
}
 // if user give anyother type then string then this will show error 
    //   Navbar.propTypes={
    //   tittle:PropTypes.string,
    //   About:PropTypes.string}
    //  // these values show defaultly in the place of views if something went wrong
     
     Navbar.defaultProps =
     {tittle : 'default title',
      About :'default about'
    };
