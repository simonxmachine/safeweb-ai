import { ElastiCache } from "aws-sdk";
import React from "react";

type LoanDetails = {
  loanId: string;
  loanAmount: number;
  interestRate: number;
};

type Loan = {
  data: LoanDetails[];
};

const JsonMappingComponent = ({ data }: Loan) => {
  return (
    <ul>
      {data.map((eachLoan: LoanDetails) => (
        <li key={eachLoan.loanId}>
          Loan Amount: {eachLoan.loanAmount}, Interest Rate:{" "}
          {eachLoan.interestRate}
        </li>
      ))}
    </ul>
  );
};

export default JsonMappingComponent;
