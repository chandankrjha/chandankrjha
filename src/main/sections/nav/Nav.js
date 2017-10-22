import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {

  render() {
    return (
      <nav className="links-wrapper">
        <Link to="experiments" className="link">Experiments</Link>
        <Link to="photography" className="link">Photography</Link>
        <Link to="travel" className="link">Travel</Link>
        <Link to="about" className="link">About</Link>
        <Link to="thoughts" className="link">Thoughts</Link>
      </nav>
    );
  }

}

export default Nav;