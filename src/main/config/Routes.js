import React from 'react';
import {Route, Switch} from "react-router-dom";
import LandingPage from "../../pages/landing/LandingPage";
import ExperimentsPage from "../../pages/experiments/Experiments";
import ThoughtsPage from "../../pages/thoughts/Thoughts";
import AboutPage from "../../pages/about/About";
import PhotographyPage from "../../pages/photography/Photography";
import TravelPage from "../../pages/travel/Travel";

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/experiments' component={ExperimentsPage} />
        <Route path='/thoughts' component={ThoughtsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/photography' component={PhotographyPage} />
        <Route path='/travel' component={TravelPage} />
      </Switch>
    );
  }

}

export default Routes;