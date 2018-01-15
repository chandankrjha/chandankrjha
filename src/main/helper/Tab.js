import React from 'react';

class Tab extends React.Component{
  render() {

    let items = this.props.items;
    return (
      <ul>
        {
          items.map((item) => {
            return <li>{item}</li>
          })
        }
      </ul>
    )
  }
}

export default Tab;