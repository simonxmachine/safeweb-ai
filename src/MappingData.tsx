import React from "react";
import JsonMappingComponent from "./JsonMappingComponent";

const yooo = [
  {
    loanId: "L001",
    loanAmount: 50000,
    interestRate: 5.5,
  },
  {
    loanId: "L002",
    loanAmount: 75000,
    interestRate: 6.0,
  },
  {
    loanId: "L003",
    loanAmount: 100000,
    interestRate: 5.0,
  },
  {
    loanId: "L004",
    loanAmount: 150000,
    interestRate: 6.5,
  },
  {
    loanId: "L005",
    loanAmount: 200000,
    interestRate: 7.0,
  },
];

function App() {
  return (
    <div>
      <JsonMappingComponent data={yooo} />
    </div>
  );
}

export default App;
