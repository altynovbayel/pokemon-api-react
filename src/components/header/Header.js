import React from 'react'
import {  NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div>
      <div className="nav">
        <div className="nav_container">
          <img src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png" alt="" />
          <ul className="nav_list">
            <li>
              <NavLink className='nav_link' to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='nav_link' to={'/pokemon'}>
                Pokemon
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
