import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () =>{
  return(
    <>
    <div></div>

    <div className="container-fluid nav_bg sticky-top bg-white shadow">
        <div className="row">
            <div className="col-10 mx-auto">
           


    <nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand fs-2 fw-bold" to="">BizLand</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-			controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto fw-bold">
      <li className="nav-item">
        <NavLink activeclassName="menu_active"
        className="nav-link" to="/Home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeclassName="menu_active" 
        className="nav-link" to="">About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeclassName="menu_active" 
        className="nav-link" to="">Services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeclassName="menu_active" 
        className="nav-link" to="">Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeclassName="menu_active" 
        className="nav-link" to="">Team
        </NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink activeclassName="menu_active" 
        className="nav-link" to="">Contact
        </NavLink>
      </li>
      
    </ul>

    
  </div>
</nav>
   
   </div>
        </div>
    </div>


    </>
  );



}
export default Navbar;