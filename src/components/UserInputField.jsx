import React from "react";

class SingleInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //debugger;
    this.props.handleChange(e);
  }

  // inputChangedHandler = (event) => event.target.value;

  render() {
    return (
      <label>
        {this.props.label}:
        <input
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

class UserInputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    //debugger;
    this.props.handleChange(e);
  }

  render() {
    return (
      <div className="User input">
        <h2> User Input field</h2>
        <div className="formgroup">
          <SingleInput
            label="Units of Ether owned"
            name="initialEtherAmount"
            placeholder="placeholder"
            value={this.props.initialEtherAmount}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <SingleInput
            label="Average tax rate"
            name="initialAvgTaxRate"
            placeholder="placeholder"
            value={this.props.initialAvgTaxRate}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <SingleInput
            label="Current price of Ether"
            name="initialEtherPrice"
            placeholder="placeholder"
            value={this.props.initialEtherPrice}
            handleChange={this.handleChange}
          />
        </div>
        <div className="formgroup">
          <SingleInput
            label="Yearly percentage Pricechange"
            name="priceChange"
            placeholder="placeholder"
            value={this.props.priceChange}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <SingleInput
            label="Return on staking (in units of Ether)"
            name="stakingReturn"
            placeholder="placeholder"
            value={this.props.stakingReturn}
            handleChange={this.handleChange}
          />
        </div>
        {/*<input type="submit" value="Submit" />*/}
      </div>
    );
  }
}
export default UserInputField;
