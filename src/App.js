// https://dev.to/suzanamelomoraes/building-a-loan-calculator-using-react-hooks-141o
// https://www.reddit.com/r/Finanzen/comments/mtimxd/hat_jemand_erfahrung_mit_der_versteureung_von_eth/
// https://reactjs.org/tutorial/tutorial.html
// https://reactjs.org/docs/hello-world.html
// https://engaging-data.com/fire-calculator/
import React from 'react';
//import Calculator from './components/Calculator';
import CalculatorClasses from './components/CalculatorClasses';
import '../node_modules/react-vis/dist/style.css';

import './App.css';

export default function App () {
  return( 
    <div className="App">
      <CalculatorClasses />  
    </div>
  );
}
