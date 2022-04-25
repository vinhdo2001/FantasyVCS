import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


const STYLES = ['nav-trans', 'nav-solid']

export const Navbar = ({navStyle}) => {
  const checkNavStyle = STYLES.includes(navStyle) ? navStyle : STYLES[0];

  return (
    <>
      <nav className={`nav-wrapper navbar navbar-expand-lg navbar-light container-fluid ${checkNavStyle}` }>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand col-3' >
            <img src='logo-horizontal.svg' id='nav-logo' />
          </Link>
          <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#nav-main'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end col-9" id="nav-main">
            <div className="navbar-nav">

              <Link to='/' className='nav-item nav-link' >
                Features
              </Link>
              <Link to='/' className='nav-item nav-link' >
                How To Play
              </Link>
              <Link to='/' className='nav-item nav-link' >
                <Button buttonStyle='btn--outline'>PLAY NOW</Button>
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
};