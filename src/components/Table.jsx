import React from "react";
import "./Table.css";
const formatNumber = (num) => {
  return num.toLocaleString(navigator.language, {
    minimumFractionDigits: 0,
    currency: "EUR",
    maximumFractionDigits: 0,
  });
};
class Table extends React.Component {
  render() {
    return (
      <div className="Table">
        <table id="table1">
          <tbody>
            <tr>
              <th> </th>
              <th> Profit with Staking </th>
              <th>+ Income from staking</th>
              <th>- Taxes on Staking income</th>
              <th>- Taxes on Capital gains</th>
              <th>= Profit without Staking</th>
            </tr>

            {this.props.profit.map((profit, year) => (
              <tr>
                <td> Year {year + 1} </td>
                <td>{formatNumber(profit.withStaking)} </td>
                <td> {formatNumber(profit.stakingIncome)}</td>
                <td> {formatNumber(profit.stakingTaxes)}</td>
                <td> {formatNumber(profit.sellingTaxes)}</td>
                <td> {formatNumber(profit.withoutStaking)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
