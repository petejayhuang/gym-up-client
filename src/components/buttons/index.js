// Notes: 
// classNames can be: "filled" or "warning"
// color has to be altered via props 
// color can be: primary or warning or danger
// example: <Button warning className="small filled"> FILLED</Button>

import React from 'react'
import styled, { css } from 'styled-components'
import appStyles from '../../assets/css/appStyles'

const {
  primary, primaryLight, primaryDark,
  warning, warningLight, warningDark,
  danger, dangerLight, dangerDark
} = appStyles.colors

const color = (props, shade) => {
  switch (shade) {
    case "Light":
      if (props.warning) {
        return warningLight
      } else if (props.danger) {
        return dangerLight
      } else {
        return primaryLight
      }
    default:
      if (props.warning) {
        return warning
      } else if (props.danger) {
        return danger
      } else {
        return primary
      }
  }
}
const Button = styled.button`
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: white;
  border: 1px solid white;
  border-radius: 5px;
  color: ${props => color(props)};
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1.5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .1);   
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, .2);
  };

  &.small {
    width: 100px;
    padding-top: 5px;
    padding-bottom: 5px;
  };

  &.filled {
    background: ${props => color(props)};
    color: white;
    border: 1px solid ${props => color(props)};
    &:hover {
      background: ${props => color(props, "Light")};
      border: 1px solid ${props => color(props, "Light")};
      transform: translateY(-1px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, .2);
    };
  };

  &.outline {
    background: white;
    color: ${props => color(props)};
    border: 1px solid ${props => color(props)};
    &:hover {
      background: ${props => color(props, "Light")};
      border: 1px solid ${props => color(props, "Light")};
      color: white; 
      transform: translateY(-1px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, .2);
    };
  };
`

export default Button;