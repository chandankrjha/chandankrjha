import React from 'react';
import { Link } from "react-router-dom";

class InitialBaseChild extends React.Component {

  render() {
    return (
      <nav style={{ marginTop: "20px" }}>
        <Link to="meow">Site under construction</Link>
      </nav>
    );
  }

}

export default InitialBaseChild;