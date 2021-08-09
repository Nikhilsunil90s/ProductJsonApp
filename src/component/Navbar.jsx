import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../images/product.png'

const Navbar=()=>{
    return(
        <>
    <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>

     


    <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <NavLink className="navbar-brand p" exact to="/"> <img src={web}  alt='home img' height='40px' width='40px'/>Product Management</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" exact to="/">Home</NavLink>
        </li>
       
      
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

</div>
        </div>

    </div>

        </>

    )
}

export default Navbar;