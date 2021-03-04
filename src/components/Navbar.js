import React from 'react'

import logo from './logo.svg'
import logomobile from './logomobile.svg'
import search from './search.svg'
import hamburger from './hamburger.svg'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <img src={logo} alt='FilmGraphs logo' />
                </div>
                <div className='navbar-links'>
                    <div>ABOUT</div>
                    <div>ACTORS</div>
                    <div>DIRECTORS</div>
                    <div>FRANCHISES</div>
                </div>
                <div className='navbar-icon'>
                    <img src={search} alt='Search icon' />
                </div>
            </nav>
            <nav className='navbar-mobile'>
                <div className='navbar-icon'>
                    <img src={hamburger} alt='Menu icon' />
                </div>
                <div className='navbar-logo'>
                    <img src={logomobile} alt='FilmGraphs logo' />
                </div>
                <div className='navbar-icon'>
                    <img src={search} alt='Search icon' />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
