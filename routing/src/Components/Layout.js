import React from 'react'
import './Layout.css';
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Services">Services</Link>
            <Link to="/About">About</Link>
            <NavLink to="/about" style={({isActive})=>({colour: isActive ? "blue" : "white"})}>About</NavLink>
            <Link to="/Product">Product</Link>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout