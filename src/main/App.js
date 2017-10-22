import React from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "./appActions";
import AssetsPage from "../assets/AssetsPage";

class App extends React.Component {
  componentWillMount() {
    let params = {
      namespace: window.namespace
    };
    this.props.dispatch(actions.init(params))
  }

  render() {
    if (this.props.loading) {
      return <div/>
    }
    return (
      <div>
        <Switch>
          <Route path='/ecenter/smart/assets/images' component={AssetsPage} />
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
