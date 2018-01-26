import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../components/buttons";
import { Link } from "react-router-dom";

// background: url("https://static.pexels.com/photos/669584/pexels-photo-669584.jpeg");
const Container = styled.div`
  height: 95vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Text = styled.div`
  max-width: 500px;
  color: white;
  font-size: 40px;
  padding: 20px;
`;
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Text>
          Use GymApp to reach your goals. Start a session. Add workouts to your
          session. Get analytics. Get fit.
        </Text>
        <div>
          <Link to="/register">
            <Button primary> Get Started</Button>
          </Link>
        </div>
      </Container>
    );
  }
}
