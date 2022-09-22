import React from 'react';
import {Link} from "react-router-dom";
import about from './About'

export default function Navbar(props) {
  return (
     <nav>
        <div id="logo">folio <b>.</b></div>
         <ul className="nav-items">
            <li><Link href="" to='/'>Home</Link></li>
            <li><Link href='' to="/about" >about</Link></li>
            <li><Link href="" to="/skills">skills</Link></li>
            <li><Link href="" to="/projects" >projects</Link></li>
         </ul>
         <div className="links">
             <a href="https://www.instagram.com/neeerajpatil/" target="blank"><i className="fa-brands fa-instagram"></i></a>
             <a href="https://www.linkedin.com/in/niraj-p-643637100" target="blank"><i className="fa-brands fa-linkedin"></i></a>
             <a href="https://twitter.com" target="blank"><i className="fa-brands fa-twitter"></i></a>
             <a href="https://github.com/neerajpatil099" target="blank"><i className="fa-brands fa-github"></i></a>
         </div>
    </nav>
  )
}
