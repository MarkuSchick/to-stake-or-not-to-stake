import React from "react";
import UserInputField from "./UserInputField";
import Graph from "./Graph";
import Table from "./Table";
import calculateProfit from "./Profit";

// default values
const defaulValues = {
  maxYears: 11,
  yearlyTaxDeduction: 256,
};

class CalculatorClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialAvgTaxRate: 0.15,
      initialEtherAmount: 32,
      initialEtherPrice: 3000,
      stakingReturn: 0.1,
      priceChange: 0.1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    debugger;
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    /* user input
    const userInputValues = {
      initialAvgTaxRate: 0.15,
      initialEtherAmount: 32,
      initialEtherPrice: 1000,
      stakingReturn: 0.05,
      priceChange: 0.3,
    };*/

    // calculate profits from this
    const profit = calculateProfit(defaulValues, this.state);
    //debugger;
    const profitWithoutStaking = profit.map((profit, index) => {
      return { x: index + 1, y: profit.withoutStaking };
    });
    const profitWithStaking = profit.map((profit, index) => {
      return { x: index + 1, y: profit.withStaking };
    });

    //debugger;

    // html representation
    return (
      <div className="calculator">
        <h1> Staking Calculator</h1>
        <UserInputField
          initialAvgTaxRate={this.state.initialAvgTaxRate}
          initialEtherAmount={this.state.initialEtherAmount}
          initialEtherPrice={this.state.initialEtherPrice}
          stakingReturn={this.state.stakingReturn}
          priceChange={this.state.priceChange}
          handleChange={this.handleChange}
        />
        <Graph
          profitWithoutStaking={profitWithoutStaking}
          profitWithStaking={profitWithStaking}
        />
        <Table profit={profit} />
      </div>
    );
  }
}
export default CalculatorClasses;
