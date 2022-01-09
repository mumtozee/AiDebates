import { memo } from "react"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from './Footer.module.css'

import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <>
      <footer className="d-flex bg-primary flex-wrap align-items-center justify-content-right justify-content-md-between py-1">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/about" className="nav-link px-2 link-light">ABOUT US</Link></li>
          <li><Link to="/contacts" className="nav-link px-2 link-light">CONTACTS</Link></li>
        </ul>
        
        <p className="d-flex col-md-2 mb-2 mb-md-0 text-light text-decoration-none">
          &copy; 2021. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;