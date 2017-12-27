import React, { Component } from "react";
import { connect } from "react-redux";
import { analyticsSessions, analyticsWorkouts } from "../../actions";
import Bar from "../../components/charts/bar/SessionIntensity";
import Line from "../../components/charts/line/TotalWeight";
import Scatter from "../../components/charts/scatter/TotalWeightScatter";
import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

const Container = styled.div`
  padding: 30px;
`;
const BarWrapper = styled.div`
  padding: 20px;
`;
const LineWrapper = styled.div`
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  margin-top: 10px;
  background: white;
  padding: 20px;
`;
const ScatterWrapper = styled.div`
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  margin-top: 30px;
  background: white;
  padding: 20px;
`;
class Analytics extends Component {
  componentDidMount() {
    // this.props.analyticsSessions();
    this.props.analyticsWorkouts();
  }
  render() {
    return (
      <Container>
        {/* <BarWrapper>
          <Bar sessions={this.props.analytics.sessions} />
        </BarWrapper> */}
        <LineWrapper>
          <Line workouts={this.props.analytics.workouts} />
        </LineWrapper>
        <ScatterWrapper>
          <Scatter workouts={this.props.analytics.workouts} />
        </ScatterWrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  analytics: state.analytics
});

export default connect(mapStateToProps, {
  analyticsSessions,
  analyticsWorkouts
})(Analytics);
