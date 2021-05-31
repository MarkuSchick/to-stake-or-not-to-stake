// calculate Profit
const calculateProfit = (defaulValues, userInputValues) => {
  const sumArray = (accumulator, currentValue) => accumulator + currentValue;

  /*********  initialize empty containers ************/
  const stakingGrossIncome = [];
  const stakingTaxesPaid = [];

  const _all = [];

  let oldPrice = userInputValues.initialEtherPrice;
  let hlfPrice, newPrice, income, taxes, capGain, profitWStaking;

  /*********  loop over years 1 - maxYears and calculate profit given investors sells in this year  *************/
  for (let i = 0; i < defaulValues.maxYears; i++) {
    newPrice = oldPrice * Math.pow(1 + userInputValues.priceChange, i + 1);
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
    debugger;
    capGain =
      newPrice * userInputValues.initialEtherAmount -
      userInputValues.initialEtherAmount * userInputValues.initialEtherPrice;

    stakingGrossIncome.push(income);
    stakingTaxesPaid.push(taxes);

    /*********  final values  ************/

    //debugger;
    if (i < 10) {
      profitWStaking =
        income - taxes + (1 - userInputValues.initialAvgTaxRate) * capGain;
    } else {
      profitWStaking = income - taxes + capGain;
    }

    //debugger;
    _all.push({
      withStaking: profitWStaking,
      withoutStaking: capGain,
      stakingIncome: stakingGrossIncome.reduce(sumArray),
      stakingTaxes: stakingTaxesPaid.reduce(sumArray),
      sellingProceeds: capGain,
      sellingTaxes: capGain * userInputValues.initialAvgTaxRate,
    });
  }

  return _all;
  /*
    withStaking: profitWStaking,
    withoutStaking: profitWOStaking,
    stakingIncome: cumStakingGrossIncome,
    stakingTaxes: cumStakingTaxesPaid,
    sellingProceeds: sellingProceeds,
    sellingTaxes: sellingTaxes,*/
};

export default calculateProfit;
