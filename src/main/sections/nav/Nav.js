import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showDropDown: false
    }
  }

  handleDropDown(e) {
    e.preventDefault();

    this.setState({
      showDropDown: !this.state.showDropDown
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize())
  }

  handleResize() {
    if(window.innerWidth > 750) {
      this.setState({
        showDropDown: false
      })
    }
  }

  render() {
    return (
      <div>
        <a className="home-common home-link" href="/">Chandan</a>
        <div className="home-dropdown small-screen" onClick={(e) => this.handleDropDown(e)}>
          ...
        </div>

        <nav className="links-common wrapper">
          <Link to="experiments" className="link">Experiments</Link>
          <Link to="photography" className="link">Photography</Link>
          <Link to="travel" className="link">Travel</Link>
          <Link to="about" className="link">About</Link>
          <Link to="thoughts" className="link">Thoughts</Link>
          <Link to="curriculumvitae" className="link">CV</Link>
        </nav>

        <ul className={ 'links-dropdown dropdown' + (this.state.showDropDown ? ' show': ' hide')}>
          <li><Link to="experiments" className="link">Experiments</Link></li>
          <li><Link to="photography" className="link">Photography</Link></li>
          <li><Link to="travel" className="link">Travel</Link></li>
          <li><Link to="about" className="link">About</Link></li>
          <li><Link to="thoughts" className="link">Thoughts</Link></li>
          <li><Link to="curriculumvitae" className="link">CV</Link></li>
        </ul>
      </div>
    );
  }

}

export default Nav;