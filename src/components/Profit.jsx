// calculate Profit
const calculateProfit = (defaulValues, userInputValues) => {
  const profitWStaking = [];
  const profitWOStaking = [];

  const stakingGrossIncome = [];
  const stakingTaxesPaid = [];
  const sellingProceeds = [];
  const sellingTaxes = [];

  const cumStakingGrossIncome = [];
  const cumStakingTaxesPaid = [];

  let oldPrice = userInputValues.initialEtherPrice;
  let hlfPrice, newPrice, income, taxes, capGain;

  const sumArray = (accumulator, currentValue) => accumulator + currentValue;

  //let oldAmount = userInputValues.initialEtherAmount; /*Ether amount does not compound!*/
  // let hlfAmount, newAmount;
  for (let i = 0; i < defaulValues.maxYears; i++) {
    newPrice = oldPrice * (Math.pow(1 + userInputValues.priceChange), i + 1);
    hlfPrice = (newPrice + oldPrice) / 2;

    income =
      hlfPrice *
      userInputValues.initialEtherAmount *
      userInputValues.stakingReturn;
    taxes = Math.max(
      income * userInputValues.initialAvgTaxRate -
        defaulValues.yearlyTaxDeduction,
      0
    );
    capGain = newPrice * userInputValues.initialEtherAmount;

    stakingGrossIncome.push(income);
    stakingTaxesPaid.push(taxes);
    sellingProceeds.push(capGain);
    sellingTaxes.push(capGain * userInputValues.initialAvgTaxRate);

    cumStakingGrossIncome.push(stakingGrossIncome.reduce(sumArray));
    cumStakingTaxesPaid.push(stakingTaxesPaid.reduce(sumArray));

    profitWStaking.push(
      income - taxes + capGain * (1 - userInputValues.initialAvgTaxRate)
    );

    profitWOStaking.push(capGain);

    //debugger;
  }

  return {
    withStaking: profitWStaking,
    withoutStaking: profitWOStaking,
    stakingIncome: cumStakingGrossIncome,
    stakingTaxes: cumStakingTaxesPaid,
    sellingProceeds: sellingProceeds,
    sellingTaxes: sellingTaxes,
  };
};

export default calculateProfit;
