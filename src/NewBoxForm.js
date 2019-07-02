import React, { Component } from 'react'

class NewBoxForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: '',
      width: '',
      color: ''
    }
  }
  render(){
    return(
      <form>
        <label htmlFor="height">Height:</label>
        <input 
          type="text" 
          id="height" 
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor="width">Width:</label>
        <input 
          type="text" 
          id="width" 
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="color">Color:</label>
        <input 
          type="text" 
          id="color" 
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default NewBoxForm;