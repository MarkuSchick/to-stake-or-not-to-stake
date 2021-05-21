// https://uber.github.io/react-vis/examples/showcases/plots
// https://codepen.io/jckr/pen/LLWQpo
import React from "react";
import {
  DiscreteColorLegend,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
} from "react-vis";

class Graph extends React.Component {
  render() {
    //debugger;
    return (
      <div>
        <h2 className="graph"> Graph output</h2>
        <DiscreteColorLegend
          items={["Profit w/ staking", "Profit w/o staking"]}
          orientation="horizontal"
        />
        <XYPlot
          height={400}
          width={800}
          margin={{ left: 100, right: 10, top: 10, bottom: 40 }}
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Year" tickFormat={String} />
          <YAxis title="Profit" />
          <LineSeries data={this.props.profitWithStaking} />
          <LineSeries data={this.props.profitWithoutStaking} />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}
/*
class Graph extends React.Component {
  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 },
    ];

    return (
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} />
      </XYPlot>
    );
  }
}
*/
export default Graph;
