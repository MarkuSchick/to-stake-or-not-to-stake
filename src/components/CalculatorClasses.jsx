import React from "react";
import UserInputField from "./UserInputField";
import Graph from "./Graph";
import Table from "./Table";
import calculateProfit from "./Profit";

class CalculatorClasses extends React.Component {
  render() {
    // default values
    const defaulValues = {
      maxYears: 11,
      yearlyTaxDeduction: 256,
    };

    // user input
    const userInputValues = {
      initialAvgTaxRate: 0.15,
      initialEtherAmount: 32,
      initialEtherPrice: 1000,
      stakingReturn: 0.05,
      priceChange: 0.3,
    };

    // calculate profits from this
    const profit = calculateProfit(defaulValues, userInputValues);
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
          initialAvgTaxRate={userInputValues.initialAvgTaxRate}
          initialEtherAmount={userInputValues.initialEtherAmount}
          initialEtherPrice={userInputValues.initialEtherPrice}
          stakingReturn={userInputValues.stakingReturn}
          priceChange={userInputValues.priceChange}
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
