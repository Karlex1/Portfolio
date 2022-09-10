import React from 'react'
import "./navbar.css"

export default function Header() {
  return (<>
    <nav className="navbar">

      <div className="logo">𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</div>



      <div className='rt'>
<input type="checkbox" id='toogle' />
<label htmlFor="toogle" className='button'></label>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

          <div className="menu">
            <li><a href="#about">Home</a></li>
            <li><a href="#about">About</a></li>
            <li className="services">
              <a href="/">Project</a>
              <ul className="dropdown">
                <li><a target="_blank " href="https://minor-project-sanchit.netlify.app/">Tic-Tac-Toe</a></li>
                <li><a target="_blank " href="https://karlex1.github.io/QuoteMachine/">Quote Machine</a></li>
                <li><a href="https://karlex1.github.io/Box-officee/#/" target="_blank ">Box-Office</a></li>
                <li><a href="https://expensetracker456.netlify.app/" target="_blank ">Expense Tracker</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </div>
        </ul>
      </div>
    </nav>

  </>
  )
}
