// https://github.com/uber/react-vis/blob/premodern/showcase/misc/time-chart.js
import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
} from "react-vis";
class Graph extends React.Component {
  render() {
    return (
      <div className="Graph">
        <h2> Graph output</h2>
        <XYPlot xType="time" height={300} width={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Year" />
          <YAxis title="Profit" />
          <LineSeries data={this.props.profitWithStaking} />
          <LineSeries data={null} />
          <LineSeries data={this.props.profitWithoutStaking} />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}
export default Graph;

/*

*/
