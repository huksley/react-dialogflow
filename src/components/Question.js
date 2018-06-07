import config from '../config';
import { ApiAiClient } from 'api-ai-javascript';
import { PropTypes } from 'prop-types';
import { get } from 'lodash';
import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

const client = new ApiAiClient({ accessToken: config.dialogFlowAccessToken });

export default class Question extends Component {
  constructor(props) {
      super(props);
      this.state = {
        answer: {},
        error: null
      }
      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      console.log(`Getting answer for ${this.props.id}: ${this.props.question}`)
      client.textRequest(this.props.question).then((r) => {
        console.log(r);
        this.setState(prevState => (
          { answer: r }
        ))
        this.props.onAnswer();
      }).catch((e) => {
        this.setState(prevState => (
          { error: e }
        ))
        console.log(e);
      })
  }

  handleClick() {
    alert(JSON.stringify(this.state.answer));
  }

  render() {
    return (
      <Panel>
        <Panel.Body>
          <div className="pull-right position-absolute">
            <Button bsSize="small" bsStyle="warning" onClick={this.handleClick}>?</Button>
            &nbsp;
            <Button bsSize="small" bsStyle="danger">&times;</Button>
          </div>
          <div className={this.props.divClass}>
            <div>Question: {this.props.question}</div>
            {
              this.state.error ? 
              <div>Error: {this.state.error.message}</div>
              :
              <div>Answer: {get(this.state.answer, 'result.fulfillment.speech')}</div>
            }
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string,
  divClass: PropTypes.string
}

Question.defaultProps = {
  divClass: 'questionDiv'
}
