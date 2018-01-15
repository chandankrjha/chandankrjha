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

export default Form;