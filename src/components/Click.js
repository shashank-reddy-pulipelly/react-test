import React, { Component } from 'react'
import Parent from './parent';
 class Click extends Component {

  render() {
   var {count,handler} = this.props;
    return (
      <div style={ {
        width:'300px',
        margin:'0 auto'
       }} className="center">
        <button className="container " onClick={handler}>clicked {count} times</button>
      </div>
    )
  }
}

export default Parent(Click)
