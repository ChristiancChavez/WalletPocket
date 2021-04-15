import React from "react";
// Components
import Quantity from "./Quantity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Quantity",
  component: Quantity,
};

export const walletQuantity = () => (
  <Quantity fontSize="24px" weigth="800">
    2'000.000
  </Quantity>
);
export const pocketQuantity = () => (
  <Quantity fontSize="16px" weigth="600">
    200.000
  </Quantity>
);
