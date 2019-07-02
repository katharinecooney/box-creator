import React, { Component } from 'react'

class NewBoxForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: '',
      width: '',
      color: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddBox = this.handleAddBox.bind(this);
  }

  handleChange(event){
    let {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleAddBox(event){
    event.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      height: '',
      width: '',
      color: ''
    })
  }

  render(){
    return(
      <form onSubmit={this.handleAddBox}>
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
        <button type="submit">Add Box!</button>
      </form>
    )
  }
}

export default NewBoxForm;