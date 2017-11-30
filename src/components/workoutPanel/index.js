import React from 'react'

import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const WorkoutCard = styled.div`
  border: 1px solid ${appStyles.colors.grey};
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  p {
    margin: 0px;
    padding: 0px;
  }
  box-shadow: 2px 2px 5px ${appStyles.colors.grey};
`

const WorkoutPanel = (props) => {

  return (
    <Container>
      {props.workouts.map((workout, index) => {
        return (
          <WorkoutCard key={index}>
            <p>Exercise {workout.workoutOrder}</p>
            <p>Name: {workout.name}</p>
            <p>Weight: {workout.weight}</p>
            <p>Repetitions: {workout.reps}</p>
            <p>(edit)</p>
          </WorkoutCard>
        )
      })}
    </Container>
  )
}


export default WorkoutPanel