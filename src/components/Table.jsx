import React from "react";

class Table extends React.Component {
  render() {
    return (
      <div className="Table">
        <h2> Table</h2>
        <table>
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
        </table>
      </div>
    );
  }
}
export default Table;
