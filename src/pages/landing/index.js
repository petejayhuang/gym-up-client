import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../components/buttons'

const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
`

export default class Home extends Component {
  render() {
    return (
      <Container>
        Use GymApp to reach your wildest goals.
        Start a session.
        Add workouts to your session.
        Get fit.
        <Button>Test</Button>
        <Button warning>Test</Button>
        <Button>Test</Button>
        <Button>Test</Button>
        <Button className="outline">Test</Button>
        <Button className="filled">Test</Button>
        <Button className="filled">Test</Button>
        <Button className="filled small">Test</Button>
        <Button warning className="filled small">Test</Button>
        <Button danger className="filled small">Test</Button>

      </Container>
    )
  }
}