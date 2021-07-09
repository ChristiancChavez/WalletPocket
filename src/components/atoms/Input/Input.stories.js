import React from "react";
// Component
import Input from "./Input";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "atoms/Input",
  component: Input,
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 20,
        opacity: 0.5,
        cellAmount: 5,
        offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
  },
};

export const userInput = () => (
  <Input type="text" variantStyle="initial" placeholder="User" />
);
export const walletInput = () => (
  <Input
    type="number"
    variantStyle="initial"
    placeholder="Wallet's money"
  />
);
export const namePocketInput = () => (
  <Input
    type="text"
    variantStyle="pocket"
    placeholder="Pocket's name"
  />
);
export const moneyPocketInput = () => (
  <Input
    type="number"
    variantStyle="pocket"
    placeholder="Pocket's money"
  />
);
export const addMoneyPocketInput = () => (
  <Input
    type="number"
    variantStyle="addition"
    placeholder="Amount of money to add"
  />
);
export const addMoneyWalletInput = () => (
  <Input
    type="number"
    variantStyle="addition"
    placeholder="Amount of money to add"
  />
);
