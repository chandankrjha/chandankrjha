import React from 'react';

class Form extends React.Component{
  render() {
    let { fields } = this.props;
    return (
      <form>
        {
          fields.map((field) => {
            return {
              field
            }
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