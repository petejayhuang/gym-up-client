import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textInputChange } from '../../actions';
import styled from 'styled-components';
import appStyles from '../../assets/css/appStyles'

const FormGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
const Label = styled.label` 
`
const Input = styled.input`
  height: 40px;
  margin-top: 10px;
  border: none;
  border: 1px solid ${appStyles.colors.grey};
  border-left: 2px solid ${appStyles.colors.primary};
  width: 300px;
  padding-left: 10px;
  font-size: 18px;
`

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
    this.setState({
      text: e.target.value
    })
  }

  componentDidMount() {
    this.setState({
      text: this.props.value
    })
  }

  render() {
    console.log("props", this.props)
    return (
      <FormGroup>
        <div>
          <Label>{this.props.label}</Label>
        </div>
        <div>
          <Input
            placeholder={this.props.placeholder}
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.text}
          />
        </div>
      </FormGroup>
    )
  }
}

export default connect(null, { textInputChange })(TextInput);