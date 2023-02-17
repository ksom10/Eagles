import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import'./Nav.css'
import logo from '../images/logo.png'

function nav() {
  return (
    <nav>
        <div className='logoCont'>
        <img className='logo' src={logo}/>
        </div>
        <div className='linksCont'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/eagles'>Eagles</Link>
        <Link className='link' to='/schedule'>Schedule</Link>
        </div>
    </nav>
  )
}

export default nav