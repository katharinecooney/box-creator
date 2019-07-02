import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = {
      allBoxes: [
        {height: 50, width: 100, color: 'purple'},
        {height: 150, width: 300, color: 'magenta'},
      ]
    }
  }


  render(){
    const boxes = this.state.allBoxes.map(box => <Box height={box.height} width={box.width} color={box.color}/>);
    return(
      <div>
        <h1>Make a Box!</h1>
        {boxes}
      </div>
    )
  }
}

export default BoxList;