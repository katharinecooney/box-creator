import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid';

class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = {
      allBoxes: [
        {height: 50, width: 100, color: 'purple', id: uuid()},
        {height: 150, width: 300, color: 'magenta', id: uuid()},
      ]
    }
    this.addBox = this.addBox.bind(this);
    this.remove = this.remove.bind(this);
  }

  addBox(box){
    let newBox = {...box, id: uuid()}
    this.setState(curState => ({
      allBoxes: [...curState.allBoxes, newBox]
    }))
  }

  remove(id) {
    this.setState(curState => ({
      allBoxes: curState.allBoxes.filter(box => box.id !== id)
    }))
  }

  render(){

    const boxes = this.state.allBoxes.map(box => (
      // we add an id attribute so that we know which box to remove
      <Box id={box.id} key={box.id} height={box.height} width={box.width} color={box.color} removeBox={this.remove}/> 
    ));

    return(
      <div>
        <h1>Make a Box!</h1>
        <NewBoxForm addBox={this.addBox}/>
        {boxes}
      </div>
    )
  }
}

export default BoxList;