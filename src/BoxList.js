import React, { Component } from 'react'

class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = {
      allBoxes: []
    }
  }


  render(){
    return(
      <div>
        <h1>Make a Box!</h1>
      </div>
    )
  }
}

export default BoxList;