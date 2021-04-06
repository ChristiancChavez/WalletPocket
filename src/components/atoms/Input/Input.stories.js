import React from "react";
// Component
import Input from "./Input";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Input",
  component: Input,
};

export const userInput = () => (
  <Input size="200px" type="text" variantStyle="initial" placeholder="User" />
);
export const walletInput = () => (
  <Input
    size="200px"
    type="number"
    variantStyle="initial"
    placeholder="Wallet's money"
  />
);
export const namePocketInput = () => (
  <Input
    size="150px"
    type="text"
    variantStyle="pocket"
    placeholder="Pocket's name"
  />
);
export const moneyPocketInput = () => (
  <Input
    size="150px"
    type="number"
    variantStyle="pocket"
    placeholder="Pocket's money"
  />
);
export const addMoneyPocketInput = () => (
  <Input
    size="180px"
    type="number"
    variantStyle="addition"
    placeholder="Amount of money to add"
  />
);
export const addMoneyWalletInput = () => (
  <Input
    size="180px"
    type="number"
    variantStyle="addition"
    placeholder="Amount of money to add"
  />
);
