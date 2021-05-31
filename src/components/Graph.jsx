// https://uber.github.io/react-vis/examples/showcases/plots
// https://uber.github.io/react-vis/
// https://codepen.io/jckr/pen/LLWQpo
// https://github.com/uber/react-vis/blob/master/docs/scales-and-data.md#scale-properties
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
const logScale = (props) => {
  return props.isToggleOn ? "log" : "linear";
};
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }
  render() {
    //debugger;
    return (
      <div>
        <h2 className="graph"> Graph output</h2>
        <label>
          Logarithmic graph
          <input
            type="checkbox"
            defaultChecked={this.state.isToggleOn}
            ref="complete"
            onChange={this.handleClick}
          />
        </label>
        <DiscreteColorLegend
          items={["Profit w/ staking", "Profit w/o staking"]}
          orientation="horizontal"
        />
        <XYPlot
          height={400}
          width={800}
          margin={{ left: 100, right: 10, top: 10, bottom: 40 }}
          yType={logScale(this.state)}
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
