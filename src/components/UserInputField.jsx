import React from "react";

class SingleInput extends React.Component {
  render() {
    return (
      <label>
        {this.props.label}:
        <input
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
        />
      </label>
    );
  }
}

class UserInputField extends React.Component {
  render() {
    return (
      <div className="User input">
        <h2> User Input field</h2>
        <div class="formgroup">
          <SingleInput
            label="# Ether"
            name="initialEtherAmount"
            placeholder="placeholder"
            value={this.props.initialEtherAmount}
          />
          <SingleInput
            label="Tax rate"
            name="initialAvgTaxRate"
            placeholder="placeholder"
            value={this.props.initialAvgTaxRate}
          />
          <SingleInput
            label="# Etherprice"
            name="initialEtherPrice"
            placeholder="placeholder"
            value={this.props.initialEtherPrice}
          />
        </div>
        <div class="formgroup">
          <SingleInput
            label="# priceChange"
            name="priceChange"
            placeholder="placeholder"
            value={this.props.priceChange}
          />
          <SingleInput
            label="# stakingReturn"
            name="stakingReturn"
            placeholder="placeholder"
            value={this.props.stakingReturn}
          />
        </div>
      </div>
    );
  }
}
export default UserInputField;