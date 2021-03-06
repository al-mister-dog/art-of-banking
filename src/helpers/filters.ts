import { IBank } from "../domain/types";

export const findBankByCustomersAccounts = (
  selected: IBank,
  partiesArray: IBank[]
) => {
  return partiesArray.filter((party: IBank) =>
    selected.assets.customerDeposits.find((acc: any) => acc.id === party.id)
  );
};

export const findAllCustomers = (selected: IBank, partiesArray: IBank[]) => {
  return partiesArray.filter(
    (party: IBank) => party.type === "customer" && selected.id !== party.id
  );
};

export const findAllBanks = (selected: IBank, partiesArray: IBank[]) => {
  return partiesArray.filter(
    (party: IBank) => party.type === "bank" && selected.id !== party.id
  );
};

export const findExcessReserveBanks = (
  selected: IBank,
  partiesArray: IBank[]
) => {
  return partiesArray.filter((party: IBank) => {
    if (party.id === selected.id) {
      return false;
    } else if (party.type !== "bank") {
      return false;
    } else if (
      selected.liabilities.daylightOverdrafts[0] &&
      party.assets.bankDeposits[0] &&
      selected.liabilities.daylightOverdrafts[0].amount >
        party.assets.bankDeposits[0].amount
    ) {
      return false;
    } else {
      return true;
    }
  });
};

export const findOweingBanks = (selected: IBank, partiesArray: IBank[]) => {
  return partiesArray.filter(
    (party) =>
      party.type === "bank" &&
      party.liabilities.dues.find(
        (account) => account.id === selected.id && account.amount > 0
      )
  );
};
export const findOwedBanks = (selected: IBank, partiesArray: IBank[]) => {
  return partiesArray.filter(
    (party) =>
      party.type === "bank" &&
      party.assets.dues.find(
        (account) => account.id === selected.id && account.amount > 0
      )
  );
};

export const findOwedandOweingBanks = (
  selected: IBank,
  partiesArray: IBank[]
) => {
  const owedBanks = findOwedBanks(selected, partiesArray);
  const oweingBanks = findOweingBanks(selected, partiesArray);
  return Array.from(
    new Set([...owedBanks, ...oweingBanks])
  );
};

export const findBankToRepayLoan = (selected: IBank, partiesArray: IBank[]) => {
  return partiesArray.filter(
    (party) =>
      party.type === "bank" &&
      party.assets.bankLoans.find(
        (account) => account.id === selected.id && account.amount > 0
      )
  );
};
