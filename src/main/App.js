import React from "react";
import {connect} from "react-redux";
import * as actions from "./appActions";
import Routes from "./config/Routes";
import Nav from "./sections/nav/Nav";

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.init({}))
  }

  render() {
    if (this.props.loading) {
      return <div/>
    }
    return (
      <div>
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.app.loading
  })
)(App);
