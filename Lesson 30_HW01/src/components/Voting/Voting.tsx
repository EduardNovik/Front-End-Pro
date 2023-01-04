import React, { Component } from 'react'
import './VotingStyle.css'

export default class Voting extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      reactions: ["👍", "👎", "💚", "💩", "🤣"],
      value: [0, 0, 0, 0, 0],
      id: [1, 2, 3, 4, 5],
    };
    this.increment = this.increment.bind(this);
  }

  increment(e: any) {
    let newValue = [...this.state.value];
    newValue[e.target.id - 1] += 1;
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          {this.state.reactions.map((item: any, index: number) => {
            return (
              <div className="InnerWrapper" key={this.state.id[index]}>
                <button onClick={this.increment} id={this.state.id[index]}>
                  {item}
                </button>
                <div className="counter">{this.state.value[index]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
