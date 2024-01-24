import React from 'react'
// import {Nav  } from "Nav.css";
const Navbar = () => {
  return (
    <div>
 <nav className="navbar navbar-expand-sm ">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">
      Logo
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mynavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">
            Work@
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">
            Aboub@
          </a>
        </li>
      </ul>
     
      <a className="nav-link" href="javascript:void(0)">
            blog@
          </a>
        <a className="btn btn-success">
          Planner
        </a>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
