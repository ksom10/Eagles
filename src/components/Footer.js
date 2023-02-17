import React from 'react'
import './Footer.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import logo from '../images/logo.png'

function Footer() {
  return (
    <footer>
        <div className='contact'>
            <h2>Contact</h2>
            <h4>Phone Number: 999-999-8888</h4>
            <h4>Email: contact@eagles.com</h4>
        </div>
        <div className='menu'>
        <h2>Menu</h2>
        <Link className='linkFooter' to='/'>Home</Link>
        <Link className='linkFooter' to='/eagles'>Eagles</Link>
        <Link className='linkFooter' to='/schedule'>Schedule</Link>
        </div>
        <div className='logoTwo'>
            <img src={logo}/>
        </div>
    </footer>
  )
}

export default Footer