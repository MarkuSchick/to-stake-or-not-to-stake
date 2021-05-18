/*
import React, { useState } from "react";
// https://dev.to/suzanamelomoraes/building-a-loan-calculator-using-react-hooks-141o
// https://www.reddit.com/r/Finanzen/comments/mtimxd/hat_jemand_erfahrung_mit_der_versteureung_von_eth/

const Calculator = () => {
  const numPeriods = 10;

  const [userValues, setUserValues] = useState({
    initialAvgTaxRate: "",
    initialEtherAmount: "",
    initialEtherPrice: "",

    stakingReturn: "",
    priceChange: "",
  });

  const [profitWStaking, setProfitWStaking] = useState({
    etherAmountWStaking: "",
    taxesPaid: [0],
  });

  const [profitWOStaking, setProfitWOStaking] = useState({});

  // submit values
  const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });

  const handleSubmitValues = (e) => {
    e.preventDefault(); // do not load new page
    calculateIntermediateResults(userValues);
    calculateFinalResults(interResult);
  };

  const calculateIntermediateResults = ({
    initialEtherAmount,
    initialEtherPrice,
    initialAvgTaxRate,

    priceChange,
    stakingReturn,
  }) => {
    // toDO: add sanity checks here

    // convert
    const userinitialEtherAmount = Number(initialEtherAmount);
    const userinitialEtherPrice = Number(initialEtherPrice);
    const userinitialAvgTaxRate = Number(initialAvgTaxRate);

    const userPriceChange = Number(priceChange);
    const userStakingReturn = Number(stakingReturn);

    /*
    const elements = []; //..some array

    const items = [];

    for (const [index, value] of elements.entries()) {
      items.push(<Element key={index} />);
    }
  

    setInterResult({
      etherAmountWStaking: [],
      etherPrice: [],
      taxesPaid: [],
    });
  };
  // derive final state
  const calculateFinalResults = (
    etherAmountWStaking,
    initialEtherPrice,
    taxesPaid,
    etherPrice
  ) => {};

  // utility
  const clearFields = () => {
    setUserValues({
      initialAvgTaxRate: "",
      initialEtherAmount: "",
      initialEtherPrice: "",

      stakingReturn: "",
      priceChange: "",
    });
    setInterResult({
      etherAmountWStaking: [],
      etherPrice: [],
      taxesPaid: [],
    });
    setFinalResult({
      profitStaking: "",
      profitNotStaking: "",
    });
  };
  const setDefaultValues = () => {
    setUserValues({
      initialAvgTaxRate: 0.3,
      initialEtherAmount: 5,
      initialEtherPrice: 3500,

      stakingReturn: 0.1,
      priceChange: 20,
    });
  };

  return (
    <div className="calculator">
      <div className="form">
        <h1> Staking Calculator</h1>
        <form onSubmit={handleSubmitValues}>
          <div className="form-items">
            <h2> Set new parameters</h2>
            <div>
              <label id="label"> Avg. tax rate </label>
              <input
                type="text"
                name="initialAvgTaxRate" 
                placeholder="Average tax rate"
                value={userValues.initialAvgTaxRate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label id="label"> Ether amount </label>
              <input
                type="text"
                name="initialEtherAmount" 
                placeholder="Ether amount"
                value={userValues.initialEtherAmount}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label id="label"> Price </label>
              <input
                type="text"
                name="initialEtherPrice" 
                placeholder="Current Eth Price"
                value={userValues.initialEtherPrice}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label id="label"> Price change </label>
              <input
                type="text"
                name="priceChange" 
                placeholder="Predicted yearly price change"
                value={userValues.priceChange}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label id="label"> Yearly staking return </label>
              <input
                type="text"
                name="stakingReturn" 
                placeholder="Yearly staking return "
                value={userValues.stakingReturn}
                onChange={handleInputChange}
              />
            </div>
            <input type="submit" className="button" />
          </div>
          <div className="form-items">
            <h2> Current parameters</h2>
            average tax rate:
            {interResult.initialAvgTaxRate}, ether amount:
            {interResult.initialEtherAmount}, ether price: $
            {interResult.initialEtherPrice}, staking return:
            {interResult.stakingReturn}, price change:
            {interResult.priceChange}
            <h2> Intermediate Results</h2>
            <div>
              Ether amount w\ staking: ${finalResult.etherAmountWStaking} <br />
              Ether price: ${finalResult.etherPrice} <br />
              Taxes paid : ${finalResult.taxesPaid} <br />
            </div>
            <h2> Final Results</h2>
            <div>
              Profits with staking: ${finalResult.profitStaking} <br />
              Profits withoug staking : ${finalResult.profitNotStaking} <br />
            </div>
          </div>
          <br />
          <input
            type="button"
            value="Reset calculations"
            className="button"
            onClick={clearFields}
          />
          <input
            type="button"
            value="Set default values"
            className="button"
            onClick={setDefaultValues}
          />
        </form>
      </div>
    </div>
  );
};

export default Calculator;
*/
