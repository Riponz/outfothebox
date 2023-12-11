import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='nav'>
            <span className="logo"><NavLink className={"logoText"} to='/'>outꟻothe📦</NavLink></span>
            <div className="menu">
                <span><NavLink className={"menuItems"} to='/'>Home</NavLink></span>
                <span><NavLink className={"menuItems"} to='/view'>View</NavLink></span>
                <span><NavLink className={"menuItems"} to='/account'>Account</NavLink></span>
                <span><NavLink className={"menuItems"} to='/about'>About Us</NavLink></span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar