import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
      <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    Bilan
                </Link>
                <div className="menu-icon">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </nav>
      </>

  )
}

export default Navbar