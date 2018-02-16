// Libraries & Methods
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateWorkout } from "../../actions";

// Components
import Button from "../buttons";
// Styles
import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

`;
const Input = styled.input`
  height: 40px;
  margin-top: 10px;
  border: none;
  border: 1px solid ${appStyles.colors.grey};
  border-left: 2px solid ${appStyles.colors.warning};
  width: 300px;
  padding-left: 10px;
  font-size: 18px;
`;
class UpdateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionMasterId: null,
      createdAt: null,
      id: null,
      reps: null,
      updatedAt: null,
      workoutId: null,
      workoutOrder: null,
      weight: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdateWorkout = this.handleUpdateWorkout.bind(this);
  }

  componentWillMount() {
    this.setState(this.props.workout);
  }

  handleInputChange(key, e) {
    const tempObject = {};
    tempObject[key] = parseInt(e.target.value);
    this.setState(tempObject);
  }

  handleUpdateWorkout(event) {
    this.props.updateWorkout(
      this.state,
      this.props.workout.sessionMasterId,
      this.props.workout.id
    );
  }

  render() {
    return (
      <Container>
        <label>Weight</label>
        <Input
          onChange={e => this.handleInputChange("weight", e)}
          value={this.state.weight}
        />
        <label>Repetitions</label>
        <Input
          onChange={e => this.handleInputChange("reps", e)}
          value={this.state.reps}
        />

        <Button onClick={this.props.hideUpdateWorkoutForm}>
          Discard Changes
        </Button>

        <Button onClick={this.handleUpdateWorkout}>Update Workout</Button>
      </Container>
    );
  }
}

export default connect(null, { updateWorkout })(UpdateWorkout);
