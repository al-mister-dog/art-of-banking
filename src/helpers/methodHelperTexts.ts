interface Method {
  [index: string]: any;
}

const methodHelperTexts: Method = {
  "Open Account": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Find a Bank to Open Account With`
        : `There are no banks`;
    },
  },
  "Receive Bank Payment": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Find a Debtor Bank`
        : `You are not owed anything at the moment`;
    },
  },
  "Send Bank Payment": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Find a Creditor Bank`
        : `You do not owe anyone at the moment`;
    },
  },
  "Withdraw From": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Find a Bank to withdraw your funds`
        : `You need to open an accuont`;
    },
  },
  "Transfer To": {
    moreThanOne(arr: any[]) {
      return arr.length > 0 ? `Find a Payee` : `There are no other customers`;
    },
  },
  "Deposit To": {
    moreThanOne(arr: any[]) {
      return arr.length > 0 ? `Make a deposit` : `You need to open an account`;
    },
  },
  "Net Dues": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Find a bank you do business with`
        : `You have no correspondent accounts`;
    },
  },
  "Credit Bank Account": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Credit the account of a corresponding bank`
        : `You have no correspondent accounts`;
    },
  },
  "Debit Bank Account": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Debit the account of a corresponding bank`
        : `You have no correspondent accounts`;
    },
  },
  "Get Loan": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Find a bank to lend you reserves`
        : `There are no banks with sufficient reserves`;
    },
  },
  "Repay Loan": {
    moreThanOne(arr: any[]) {
      return arr.length > 0
        ? `Find a bank to repay loan`
        : `You do not owe any banks`;
    },
  },
};

export default methodHelperTexts