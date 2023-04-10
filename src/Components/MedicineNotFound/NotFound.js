import React from 'react'
import { Link } from 'react-router-dom'
import './Notfound.css'
import logo from './3819627.jpg'

// import ''
function NotFound() {
  return (
    <div className='not-found'>
        <img src={logo}></img>
        <Link className="nav-link" to="/">Go Back</Link>
    </div>
  )
}

export default NotFound