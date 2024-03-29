import { createSlice } from "@reduxjs/toolkit";

import helpers from "./helpers";
import { Quotes, Rates, Currencies } from "./types";
import {
  certaintyQuotes,
  exchangeRates,
  currencies,
  me,
  Salviati,
  Federigo,
  Piero,
  you,
  Tommaso,
} from "./initialState";

interface Trader {
  id: string;
  city: string;
  type: string;
  assets: any;
  liabilities: any;
  coins: any;
  goods: number;
  coinAsset: any;
  coinLiability: any;
  records: any;
}
interface Banker {
  id: string;
  city: string;
  type: string;
  assets: any;
  liabilities: any;
  coins: any;
  goods: number;
  coinAsset: any;
  coinLiability: any;
  records: any;
}
export interface PlayersState {
  conditions: {
    certaintyQuotes: Quotes;
    exchangeRates: Rates;
    currencies: Currencies;
  };
  traders: {
    me: Trader;
    Salviati: Trader;
    Federigo: Trader;
    Piero: Trader;
  };
  bankers: {
    you: Banker;
    Tommaso: Banker;
  };
  records: string[];
}

const initialState: PlayersState = {
  conditions: {
    certaintyQuotes,
    exchangeRates,
    currencies,
  },
  traders: {
    me,
    Salviati,
    Federigo,
    Piero,
  },
  bankers: {
    you,
    Tommaso,
  },
  records: [],
};
type TradersObjectKey = keyof typeof initialState.traders;
type BankersObjectKey = keyof typeof initialState.bankers;

export const renaissanceSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    trade: (state, { payload }) => {
      const { importer, exporter, amount } = payload;
      const importerId = importer.id as TradersObjectKey;
      const exporterId = exporter.id as TradersObjectKey;
      const bill = {
        id: new Date().toISOString(),
        dueTo: exporter.id,
        dueFrom: importer.id,
        city: importer.city,
        amount: amount,
        paid: false,
      };
      state.traders[importerId].goods += payload.amount;
      state.traders[exporterId].goods -= payload.amount;
      state.traders[importerId].liabilities = [
        ...payload.importer.liabilities,
        bill,
      ];
      state.traders[exporterId].assets = [...payload.exporter.assets, bill];

      const importRecord = `imported ${amount} ${
        amount > 1 ? "marcs" : "marc"
      } worth of goods from ${exporterId}`;
      const exportRecord = `exported ${amount} ${
        amount > 1 ? "marcs" : "marc"
      } worth of goods to ${importerId}`;
      state.traders[importerId].records = [
        ...state.traders[importerId].records,
        importRecord,
      ];
      state.traders[exporterId].records = [
        ...state.traders[exporterId].records,
        exportRecord,
      ];
      state.records = [
        ...state.records,
        `${importerId} imports ${amount} ${
          amount > 1 ? "marcs" : "marc"
        } worth of goods from ${exporterId}`,
      ];
    },
    drawBill: (state, { payload }) => {
      const { payee, drawee, bill } = payload;
      let payeeCopy = JSON.parse(JSON.stringify(payee));
      let draweeCopy = JSON.parse(JSON.stringify(drawee));

      drawee.id === bill.dueFrom
        ? helpers.finaliseBill(payeeCopy, draweeCopy, bill)
        : helpers.exchangeBill(payeeCopy, draweeCopy, bill);
      helpers.exchangeMoney(payeeCopy, draweeCopy, bill);
      let payeeId;
      let draweeId;
      if (payee.type === "banker") {
        payeeId = payee.id as BankersObjectKey;
        draweeId = drawee.id as TradersObjectKey;
        state.bankers[payeeId] = payeeCopy;
        state.traders[draweeId] = draweeCopy;
        state.bankers[payeeId].records = [
          ...state.bankers[payeeId].records,
          `received ${bill.amount} from ${draweeId}`,
        ];
        state.traders[draweeId].records = [
          ...state.traders[draweeId].records,
          `payed ${bill.amount} to ${payeeId}`,
        ];
        state.records = [
          ...state.records,
          `${payeeId} draws bill on ${draweeId} for ${bill.amount}`,
        ];
      } else {
        payeeId = payee.id as TradersObjectKey;
        draweeId = drawee.id as BankersObjectKey;
        state.traders[payeeId] = payeeCopy;
        state.bankers[draweeId] = draweeCopy;
        state.traders[payeeId].records = [
          ...state.traders[payeeId].records,
          `received ${bill.amount} from ${draweeId}`,
        ];
        state.bankers[draweeId].records = [
          ...state.bankers[draweeId].records,
          `payed ${bill.amount} to ${payeeId}`,
        ];
        state.records = [
          ...state.records,
          `${payeeId} draws bill on ${draweeId} for ${bill.amount} marc${
            bill.amount > 1 ? "s" : ""
          }`,
        ];
      }
    },
    remitBill: (state, { payload }) => {
      const { presenter, presentee, bill } = payload;
      const presenterId = presenter.id as BankersObjectKey;
      const presenteeId = presentee.id as BankersObjectKey;
      let presenterCopy = JSON.parse(JSON.stringify(presenter));
      let presenteeCopy = JSON.parse(JSON.stringify(presentee));
      presenterCopy.assets = presenterCopy.assets.filter(
        (b: { id: any }) => b.id !== bill.id
      );
      presenteeCopy.assets = [...presenteeCopy.assets, bill];
      state.bankers[presenterId] = presenterCopy;
      state.bankers[presenteeId] = presenteeCopy;
      state.bankers[presenterId].records = [
        ...state.bankers[presenterId].records,
        `presented remitance bill to ${presenteeId}`,
      ];
      state.bankers[presenteeId].records = [
        ...state.bankers[presenteeId].records,
        `received remitance bill from ${presenterId}`,
      ];
      state.records = [
        ...state.records,
        `${presenterId} remits bill to ${presenteeId}`,
      ];
    },
    reset: (state) => {
      state.conditions.certaintyQuotes = certaintyQuotes;
      state.conditions.exchangeRates = exchangeRates;
      state.conditions.currencies = currencies;

      state.traders.me = me;
      state.traders.Salviati = Salviati;
      state.traders.Federigo = Federigo;
      state.traders.Piero = Piero;

      state.bankers.you = you;
      state.bankers.Tommaso = Tommaso;

      state.records = [];
    },
  },
});

export const { trade, drawBill, remitBill, reset } = renaissanceSlice.actions;

export const selectTraders = (state) => state.renaissance.traders;
export const selectBankers = (state) => state.renaissance.bankers;
export const selectState = (state) => state.renaissance;
export const selectRecords = (state) => state.renaissance.records;
export const selectConditions = (state) => state.renaissance.conditions;

export default renaissanceSlice.reducer;
