import React from 'react'
import './Header.scss'
import logo from "../../assets/white-logo.svg"

function Header() {
  return (
    <header className='parent header'>

        <div className="container header-container">

            <a href="#">Our Service</a>
            <a href="#">Our Works</a>
            <a className="logo">
               <img src={logo} alt="" />
            </a>
            <a href="#">Why Choose Us</a>
            <button className="btn-c">
            <a href="#"  className='b'>Enquire Now</a>
            </button>
        </div>
      
    </header>
  )
}

export default Header
