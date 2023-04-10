import React, { Component } from 'react'
import { BrowserRouter, Form, Link, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import App from '../../App';
import { Switch } from 'react-router-dom';
import NoPage from '../Error Page/NoPage';
import './Header.css'
import Form2 from '../Search_Medicine/Form2';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import logo from './Logo2.png'
import Services from '../Services/Services';
// import Contact from '../Contact/contact';
class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md bg-light">
                    <div className="container-fluid">
                        <Link to="/"><img src={logo}></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav m-lg-auto">
                                <Link className="nav-link" to="/">Home</Link>                          
                                      {/* <Link className="nav-link" to="/Get_Medicine">Search Medicine</Link> */}
                                <Link className="nav-link" to="/contact">Contact Us</Link>

                                {/* <Link className="nav-link" to="/Contact">Contact Us</Link> */}
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<><Header></Header><Footer></Footer></>} />
                    <Route path="/Get_Medicine" element={<><Form2></Form2><Footer></Footer></>} />
                    {/* <Route path="/contact" element={<Contact></Contact>} /> */}
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </>
        )
    }
}

export default Navbar