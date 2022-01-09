import { memo, useState } from "react";
import styles from './Header.module.css';

import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const Header = (props) => {
  const [showBtns, setShowBtns] = useState("none");
  const [showProfile, setShowProfile] = useState("block");

  return (
    <>
      <nav className="d-flex bg-light flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-3 mb-0 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <h3>AIDEBATES.ORG&reg;</h3>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-dark">Hot Topics</Link></li>
          <li><Link to="/all_topics" className="nav-link px-2 link-dark">All Topics</Link></li>
          <li><Link to="/add_topic" className="nav-link px-2 link-dark">Add Topic</Link></li>
        </ul>

        <div style={{display: showBtns}} className="col-md-3 text-end">
          <Link to="/login"><button className="btn btn-outline-primary me-2">Log In</button></Link>
          <Link to="/signup"><button className="btn btn-primary">Sign Up</button></Link>
        </div>

        <div style={{display: showProfile}} className="col-md-3 text-end">
          <Link to="/profile">
            <img src={`${process.env.PUBLIC_URL}/assets/avatar.jpg`} width={40} 
              className="img-thumbnail border-2 border-success rounded-circle" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;