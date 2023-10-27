import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='nav'>
            <span className="logo"><NavLink to='/'>outꟻothe📦</NavLink></span>
            <div className="menu">
                <span className="menuItems"><NavLink to='/'>Home</NavLink></span>
                <span className="menuItems"><NavLink to='/view'>View</NavLink></span>
                <span className="menuItems"><NavLink to='/account'>Account</NavLink></span>
                <span className="menuItems"><NavLink to='/about'>About Us</NavLink></span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar