import React, { Component } from 'react';

export default class Questions extends Component {
  render() {
    const q = this.props.questions;
    
    return (
      <div>
        <div>
          Total questions: {q.length},
          Answered questions: {this.props.answers}
        </div>
        <div>
          {
            q.map((question) => (
              <div key={question.props.id}>
                <span>{question}</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
