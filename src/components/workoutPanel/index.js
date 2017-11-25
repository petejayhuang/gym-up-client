import React from 'react'

import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'


const Container = styled.div`
  border: 1px solid green;
  width: 100px
  height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const WorkoutCard = styled.div`
  border-left: 2px solid ${appStyles.colors.primary};
  display: flex;
  flex-direction: column;
`

const WorkoutPanel = (props) => {

  return (
    <Container>
      {props.workouts.map((workout) => {
        return (
          <WorkoutCard>
            <p>
              Name: {workout.name}
            </p>
            <p>

              Weight: {workout.weight}
            </p>
            <p>

              Repetitions: {workout.repetitions}
            </p>
            <p>

              Sets: {workout.sets}
            </p>
            <p>
              Difficulty: {workout.difficulty}
            </p>
            <p>
              Comment: {workout.comment}
            </p>
          </WorkoutCard>
        )
      })}
    </Container>
  )
}


export default WorkoutPanel