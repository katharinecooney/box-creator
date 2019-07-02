import React, { Component } from 'react'

class Box extends Component {
  static defaultProps = {
    height: 200,
    width: 200,
    color: 'pink'
  }

  render(){
    let boxStyle = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      backgroundColor: `${this.props.color}`
    }

    return(
      <div>
        <div style={boxStyle}></div>
        <button onClick={this.handleRemove}>Remove Box</button>
      </div>
      
    )
  }
}

export default Box;