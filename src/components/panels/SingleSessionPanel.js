import React from 'react'

import styled from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const Container = styled.div`
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .1);   
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  width: 300px;
  border-radius: 8px;
  font-weight: 700; 
  margin: 0 auto;
`

const SessionPanel = (props) => {
  return (
    <Container>
      Session "{props.session.name}" started at {props.session.startTime} (update)
    </Container>
  )
}

export default SessionPanel