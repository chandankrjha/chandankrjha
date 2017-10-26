import React from 'react';
import ImageConstants from "../../main/constants/imageConstants";
import TextConstants from "../../main/constants/textConstants";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-wrapper">
        <div>
          <img className="landing-image" src={ImageConstants.DEFAULT_IMAGE} alt="chandan"/>
        </div>
        <div className="landing-text">
          {TextConstants.LANDING_PAGE_CONTENT}
        </div>
      </div>
    );
  }
}

export default LandingPage;