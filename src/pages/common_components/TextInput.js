import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textInputChange } from '../../actions';

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.props.textInputChange(this.props.textKey, e.target.value)
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          placeholder={this.props.placeholder}
          onChange={(e) => this.handleInputChange(e)}
        />
      </div>
    )
  }
}

export default connect(null, { textInputChange })(TextInput);