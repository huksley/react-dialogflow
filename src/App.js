import React, { Component } from 'react';
import './App.css';

import Conversation from './components/Conversation';

import {
  Panel
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Panel>
          <Panel.Body id="DataBody">
            <Conversation data={this.state} />
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default App;
