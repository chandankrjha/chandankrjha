import React from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "./appActions";
import MainPage from "../pages/mainPage";

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
        <Switch>
          <Route path='/' component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.app.loading
  })
)(App);
