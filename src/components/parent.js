import React from 'react';

const Parent=(Original)=> {
class New extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
   handler=()=>{
    this.setState((prevState)=>{
      return {count:prevState.count+1}
    }
      )
   
  }
  render(){
    return(
      <Original count={this.state.count} handler={this.handler} />
    );
  }
}
  return (
   New
  )
}

export default Parent
