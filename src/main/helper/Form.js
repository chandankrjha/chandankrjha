import React from 'react';
import * as FormUtils from '../../utils/formUtils';
class Form extends React.Component{
  render() {
    let { fields } = this.props;
    return (
      <form>
        {
          fields.map((field) => {
            FormUtils.attachValueOnChange(field.name)
            
            return conditional(field);
          })
        }
      </form>
    )
  }
}

const conditional = ({ field }) => {
  if(field.type === "input") {
    return <input type={field.subType} />
  } else {
    return "";
  }
}

export default Form;