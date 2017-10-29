import React from "react";

import ResumeTemplate from "../../templates/resume";
import resumeContent from "../../main/content/resumeContent";

class Resume extends React.Component {
  render() {
    return (
      <ResumeTemplate resumeContent={resumeContent}/>
    );
  }
}

export default Resume;