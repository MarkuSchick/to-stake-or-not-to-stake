import React from "react";
import UserInputField from "./UserInputField";
import Graph from "./Graph";
import Table from "./Table";

class CalculatorClasses extends React.Component {
  render() {
    // default values
    const maxYears = 11;
    const taxDeduction = 256;

    // user input
    const initialAvgTaxRate = 0.15;
    const initialEtherAmount = 1;
    const initialEtherPrice = 100;
    const stakingReturn = 0.1;
    const priceChange = 0.1;

    // derived values
    return (
      <div className="calculator">
        <h1> Staking Calculator</h1>
        <UserInputField
          initialAvgTaxRate={initialAvgTaxRate}
          initialEtherAmount={initialEtherAmount}
          initialEtherPrice={initialEtherPrice}
          stakingReturn={stakingReturn}
          priceChange={priceChange}
        />
        <Graph />
        <Table />
      </div>
    );
  }
}
export default CalculatorClasses;
