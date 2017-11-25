import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  border: 1px solid red;
`

export default class Home extends Component {
  render(){
    return(
      <Container>
        Use GymApp to reach your wildest goals.
        Start a session.
        Add workouts to your session.
        Get fit. 
      </Container>
    )
  }
}