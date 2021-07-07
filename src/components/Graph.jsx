// https://uber.github.io/react-vis/examples/showcases/plots
// https://uber.github.io/react-vis/
// https://codepen.io/jckr/pen/LLWQpo
// https://github.com/uber/react-vis/blob/master/docs/scales-and-data.md#scale-properties
import React, { useState } from "react";
import {
  DiscreteColorLegend,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
} from "react-vis";

export default function Graph(props) {
  const [state, setState] = useState({
    isToggleOn: false,
  });

  const handleToggle = (event) => {
    setState(({ isToggleOn, ...prevState }) => ({
      ...prevState,
      isToggleOn: !isToggleOn,
    }));
  };

  const profitWithoutStaking = props.profit.map((profit, index) => {
    return { x: index + 1, y: profit.withoutStaking };
  });
  const profitWithStaking = props.profit.map((profit, index) => {
    return { x: index + 1, y: profit.withStaking };
  });

  const logScale = () => {
    return state.isToggleOn ? "log" : "linear";
  };
  //debugger;
  return (
    <div>
      <h2 className="graph"> Graph output</h2>
      <label>
        Logarithmic graph
        <input
          type="checkbox"
          defaultChecked={state.isToggleOn}
          onChange={handleToggle}
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
        yType={logScale()}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Year" tickFormat={String} />
        <YAxis title="Profit" />
        <LineSeries data={profitWithStaking} />
        <LineSeries data={profitWithoutStaking} />
        <YAxis />
      </XYPlot>
    </div>
  );
}
