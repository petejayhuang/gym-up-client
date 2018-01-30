import React from "react";
import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

const Container = styled.section`
  background: ${appStyles.colors.primaryDark};
  height: 200px;
`;
const Footer = () => <Container />;

export default Footer;
