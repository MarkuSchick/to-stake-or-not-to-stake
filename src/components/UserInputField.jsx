import React from "react";

const SingleInput = (props) => {
  const handleChange = (e) => {
    //debugger;
    props.handleChange(e);
  };
  return (
    <label>
      {props.label}:
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      />
    </label>
  );
};

export default function UserInputField(props) {
  const handleChange = (e) => {
    props.handleChange(e);
  };

  return (
    <div className="User input">
      <h2> User Input field</h2>
      <div className="formgroup">
        <SingleInput
          label="Units of Ether owned"
          name="initialEtherAmount"
          placeholder="placeholder"
          value={props.initialEtherAmount}
          handleChange={handleChange}
        />
      </div>
      <div>
        <SingleInput
          label="Average tax rate"
          name="initialAvgTaxRate"
          placeholder="placeholder"
          value={props.initialAvgTaxRate}
          handleChange={handleChange}
        />
      </div>
      <div>
        <SingleInput
          label="Current price of Ether"
          name="initialEtherPrice"
          placeholder="placeholder"
          value={props.initialEtherPrice}
          handleChange={handleChange}
        />
      </div>
      <div className="formgroup">
        <SingleInput
          label="Yearly percentage Pricechange"
          name="priceChange"
          placeholder="placeholder"
          value={props.priceChange}
          handleChange={handleChange}
        />
      </div>
      <div>
        <SingleInput
          label="Return on staking (in units of Ether)"
          name="stakingReturn"
          placeholder="placeholder"
          value={props.stakingReturn}
          handleChange={handleChange}
        />
      </div>
      {/*<input type="submit" value="Submit" />*/}
    </div>
  );
}
