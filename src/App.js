// https://dev.to/suzanamelomoraes/building-a-loan-calculator-using-react-hooks-141o
// https://www.reddit.com/r/Finanzen/comments/mtimxd/hat_jemand_erfahrung_mit_der_versteureung_von_eth/
// https://reactjs.org/tutorial/tutorial.html
// https://reactjs.org/docs/hello-world.html
// https://engaging-data.com/fire-calculator/
import React from "react";
import Calculator from "./pages/Calculator";
import Motivation from "./pages/Motivation";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Header />
          <Calculator />
        </Route>
        <Route path="/motivation" exact>
          <Header />
          <Motivation />
        </Route>
      </Router>
    </div>
  );
}
