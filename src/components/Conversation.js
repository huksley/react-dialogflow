import React, { Component } from 'react';

import Question from './Question';
import Questions from './Questions';

import {
    Panel, FormControl 
} from 'react-bootstrap';

export default class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      isToggleOn: true,
      dialog: [],
      answers: 0
    }
    this.handleKey = this.handleKey.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  render() {
    return (
      <div>
        <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Ask bot</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
          <FormControl
              type="text"
              id="QuestionPrompt"
              value={this.state.value}
              placeholder="Enter question"
              onChange={this.handleChange}
              onKeyPress={this.handleKey}
            />
          </Panel.Body>
          <Panel.Body>
            <div>
              Current question list: {this.state.dialog.length}
              <Questions questions={this.state.dialog} answers={this.state.answers}/>
            </div>
          </Panel.Body>
        </Panel>
      </div>
      </div>
    );
  }

  handleAnswer() {
    console.log("Got answer!");
    this.setState(prev => ({ answers: prev.answers + 1 }));
  }

  handleKey(ev) {
    console.log("Handle key", ev, ev.key, ev.charCode, ev.key === 'Enter' ? 1 : 0)
    if (ev.key === 'Enter') {
      const question = this.state.value;
      const key = 'q' + this.state.dialog.length;
      let q = <Question id={key} question={question} onAnswer={this.handleAnswer}/>
      this.setState(prevState =>  ({
        value: "", 
        dialog: [...prevState.dialog, q]
      }), function () {
        console.log("Current dialog length: " + this.state.dialog.length);
      })
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleChange(event) {
    console.log("Handle change");
    this.setState({value: event.target.value});
  }

  componentDidMount() {
    document.getElementById('QuestionPrompt').focus();
  }
}
