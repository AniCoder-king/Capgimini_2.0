import React from 'react'
import "./Navbar/css/navbar.css"
import { NavLink } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import { MDBCol } from "mdbreact";

function Navbar() {
    return (

        <header id='header_main'>

            <div className='navbar'>
                <div className="headertop">

                    <NavLink to="/investors" className="underline">Investors</NavLink>
                    <NavLink to="/Contactus" className="underline">Contact us</NavLink>
                    <NavLink to="/language" className="underline">Global | EN <LanguageIcon></LanguageIcon> </NavLink>

                </div>

                
                <div className='headerrow'>
                    <div className="headerbottom">
                        <a className="logo" tabIndex="-1" href='/'><img
                            src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                            alt="Capgemini"
                            data-blue-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                            data-white-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"></img>
                        </a>
                        <ul className="dropdown" id='navbar_items'>
                            <NavLink to="/insights" className="underline">insights</NavLink>
                            <NavLink to="industries" className="underline"  >Industries</NavLink>
                            <NavLink to="/services" className="underline">services</NavLink>
                            <NavLink to="/career" className="underline">career</NavLink>
                            <NavLink to="/news" className="underline">news</NavLink>
                            <NavLink to="/about" className="underline">about us</NavLink>
                        </ul>
                    </div>
                    
                    <div className='search'>
                        <MDBCol>
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </MDBCol>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar



