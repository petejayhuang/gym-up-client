import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../components/buttons";
import { Link } from "react-router-dom";
import jumbotronImage from "../../assets/images/runner-landing-hero.jpeg";
import appStyles from "../../assets/css/appStyles";

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

const Jumbotron = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${jumbotronImage});
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  text-align: left;
  font-size: 60px;
`;
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Text>Knowing your numbers means beating them.</Text>
        </Jumbotron>
      </Container>
    );
  }
}
