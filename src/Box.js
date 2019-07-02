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
      <div style={boxStyle}></div>
    )
  }
}

export default Box;