import React from "react";

class Table extends React.Component {
  render() {
    return (
      <div className="Table">
        <h2> Table</h2>
        <h2>
          profit with staking is
          {this.props.profit.withStaking.map((x) => (
            <div key={x}> {x} </div>
          ))}
        </h2>
        <h2>
          profit without staking is
          {this.props.profit.withoutStaking.map((x) => (
            <div key={x}> {x} </div>
          ))}
        </h2>
        <h2>
          stakingIncome is
          {this.props.profit.stakingIncome.map((x) => (
            <div key={x}> {x} </div>
          ))}
        </h2>
        <h2>
          stakingTaxes is
          {this.props.profit.stakingTaxes.map((x) => (
            <div key={x}> {x} </div>
          ))}
        </h2>
        <h2>
          sellingProceeds is
          {this.props.profit.sellingProceeds.map((x) => (
            <div key={x}> {x} </div>
          ))}
        </h2>
        <h2>
          sellingTaxes is
          {this.props.profit.sellingTaxes.map((x) => (
            <div key={x}> {x} </div>
          ))}
        </h2>

        <table>
          <tbody>
            <tr>
              <th>First header</th>
              <th>Second header</th>
            </tr>
            <tr>
              <td>1,1 cell</td>
              <td>1,2 Cell</td>
            </tr>
            <tr>
              <td>2,1 cell</td>
              <td>2,2 Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
