import React, { Component } from "react";
import { connect } from "react-redux";
import { analyticsSessions, analyticsWorkouts } from "../../actions";
import Bar from "../../components/charts/bar/SessionIntensity";

import styled from "styled-components";

const BarWrapper = styled.div`
  padding: 20px;
`;
class Analytics extends Component {
  componentDidMount() {
    this.props.analyticsSessions();
    this.props.analyticsWorkouts();
  }
  render() {
    return (
      <div>
        <BarWrapper>
          <Bar sessions={this.props.analytics.sessions} />
        </BarWrapper>
      </div>
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
