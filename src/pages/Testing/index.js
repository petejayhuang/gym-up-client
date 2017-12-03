import React from 'react'
import Button from '../../components/buttons'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Buttons = () => {
  return (
    <div>
      <Container>
        <Button className="filled warning" > FILLED</Button>
        <Button className="outline" > OUTLINE</Button>
        <Button> NORMAL</Button >

        <Button className="small filled" > FILLED</Button>
        <Button className="small outline" > OUTLINE</Button>
        <Button className="small"> NORMAL</Button >

        <Button primary className="small filled primary"> FILLED</Button>
        <Button primary className="small outline primary"> OUTLINE</Button>
        <Button primary className="small primary"> NORMAL</Button >

        <Button warning className="small filled warning"> FILLED</Button>
        <Button warning className="small outline warning"> OUTLINE</Button>
        <Button warning className="small warning"> NORMAL</Button >

        <Button danger className="small filled danger" > FILLED</Button>
        <Button danger className="small outline danger"> OUTLINE</Button>
        <Button danger className="small danger"> NORMAL</Button >
      </Container >
    </div>
  )
}

export default Buttons