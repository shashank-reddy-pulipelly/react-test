import React, { Component } from 'react';
import Parent from './parent';
export class Hover extends Component {
  render() {
   var {count,handler}=this.props;
    return (
      <div>
        <h1 onMouseOver={handler}> the count is {count}</h1>
      </div>
    )
  }
}

export default Parent(Hover)
