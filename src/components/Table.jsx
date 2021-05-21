import React from "react";

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
        <h2> Table</h2>

        <table>
          <tbody>
            <tr>
              <th>withStaking</th>
              <th>withoutStaking</th>
              <th>stakingIncome</th>
              <th>stakingTaxes</th>
              <th>sellingProceeds</th>
              <th>sellingTaxes</th>
            </tr>

            {this.props.profit.map((profit) => (
              <tr>
                <td>{formatNumber(profit.withStaking)}</td>
                <td> {formatNumber(profit.withoutStaking)}</td>
                <td> {formatNumber(profit.stakingIncome)}</td>
                <td> {formatNumber(profit.stakingTaxes)}</td>
                <td> {formatNumber(profit.sellingProceeds)}</td>
                <td> {formatNumber(profit.sellingTaxes)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
