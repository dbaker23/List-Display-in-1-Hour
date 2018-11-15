import React, { Component } from 'react';

import { List } from './components/list';
import { ListDetail } from './components/list_detail';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      selected: {
        name: '',
        details: ''
      },
      data: [        
        { 
          name: 'Item 1',
          details: 'stuff here'
        },
        { 
          name: 'Item 2',
          details: 'stuff here'
        },
        { 
          name: 'Item 3',
          details: 'stuff here'
        }
      ]
    };

    this.onItemSelect = this.onItemSelect.bind( this );
  }

  onItemSelect( item ) {    
    this.setState({
      selected: {
        name: item.name,
        details: item.details
      }
    });
  }

  render() {
    return (
      <div className="App">
        <ListDetail details={this.state.selected} />
        <List 
          onItemSelect={this.onItemSelect}
          data={this.state.data} />
      </div>
    );
  }
}

export default App;
