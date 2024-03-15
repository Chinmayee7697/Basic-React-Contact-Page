import React from "react";
import styles from "./Navbar.module.css";

function Navbar(){
 return(   <nav className="container">
     <img src="/images/logo.webp" alt="logo" />

     <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
    </nav>
 )
}

export default Navbar;