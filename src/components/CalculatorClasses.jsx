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
      initialAvgTaxRate: 0.35,
      initialEtherAmount: 1,
      initialEtherPrice: 1000,
      stakingReturn: 0.1,
      priceChange: 1,
    };

    const profit = calculateProfit(defaulValues, userInputValues);

    const profitWithOutStaking = profit.withoutStaking.map((profit, index) => {
      return { x: index + 1, y: profit * index };
    });

    const profitWithStaking = profit.withStaking.map((profit, index) => {
      return { x: index + 1, y: profit };
    });
    debugger;
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
          profitWithOutStaking={profitWithOutStaking}
          profitWithStaking={profitWithStaking}
        />
        <Table profit={profit} />
      </div>
    );
  }
}
export default CalculatorClasses;

/*
      const calculatePrice = (initialPrice, growthRate, numPeriods) => {
        let cumulativeGrowth = [];
        for (let i = 0; i < numPeriods; i++) {
          cumulativeGrowth.push(Math.pow(1 + growthRate, i));
        }
        const prices = cumulativeGrowth.map((x) => x * initialPrice);
        return prices;
      };


    const profit = {
      profitWStaking: {
        totalProfit: [
          1, 2, 3,
        ] stakingGrossIncome + totalSellingProceeds - totalStakingTaxesPaid - totalSellingTaxes ,
        totalStakingGrossIncome: [1, 2, 3],
        totalStakingTaxesPaid: [1, 1, 1],
        totalSellingProceeds: [1, 2, 3],
        totalSellingTaxes: [1, 2, 3],
      },
      profitWOStaking: {
        totalProfit: [
          1, 2, 3,
        ] stakingGrossIncome + totalSellingProceeds - totalStakingTaxesPaid - totalSellingTaxes,
        totalStakingGrossIncome: [1, 2, 3],
        totalStakingTaxesPaid: [1, 1, 1],
        totalSellingProceeds: [1, 2, 3],
        totalSellingTaxes: [1, 2, 3],
      },
    };
    
    */
