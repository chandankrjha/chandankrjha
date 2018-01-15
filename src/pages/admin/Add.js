import React from 'react';
import Form from '../../main/helper/Form';
import Tab from '../../main/helper/Tab';

class AddPage extends React.Component {

  render() {
    return (
      <div>
        <Tab tabs={[
          'tab1', 'tab2'
        ]}/>
        <div>
          <Form fields={
            [{
              type: 'input',
              subType: 'text'
            }]
          } />
        </div>
      </div>
    );
  }

}

export default AddPage;