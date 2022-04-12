import React, { useState } from "react";
import UserInputField from "../components/UserInputField";
import Graph from "../components/Graph";
import calculateProfit from "../components/Profit";

// default values
const defaulValues = {
  maxYears: 11,
  yearlyTaxDeduction: 256,
};

export default function CalculatorClasses(props) {
  const [userValues, setUserValues] = useState({
    initialAvgTaxRate: 0.15,
    initialEtherAmount: 32,
    initialEtherPrice: 3000,
    stakingReturn: 0.1,
    priceChange: 0.1,
  });

  const handleChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });

  // calculate profits from this
  const profit = calculateProfit(defaulValues, userValues);
  //debugger;

  // html representation
  return (
    <div className="calculator">
      <h1> Staking Calculator</h1>
      <UserInputField
        initialAvgTaxRate={userValues.initialAvgTaxRate}
        initialEtherAmount={userValues.initialEtherAmount}
        initialEtherPrice={userValues.initialEtherPrice}
        stakingReturn={userValues.stakingReturn}
        priceChange={userValues.priceChange}
        handleChange={handleChange}
      />
      <Graph profit={profit} />
    </div>
  );
}
