import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <nav className='nav'>
            <span className="logo">outꟻothe📦</span>
            <div className="menu">
                <span className="menuItems Home">Home</span>
                <span className="menuItems">View</span>
                <span className="menuItems">Account</span>
                <span className="menuItems">About Us</span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar