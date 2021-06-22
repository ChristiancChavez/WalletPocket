import React from "react";
// Component
import ButtonIcon from "./ButtonIcon";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "atoms/Button Icon",
  component: ButtonIcon,
};

export const ButtonAddMoney = () => <ButtonIcon name="coin-dollar" />;
export const ButtonRemovePocket = () => <ButtonIcon name="bin2" />;
export const ButtonCreatePocket = () => <ButtonIcon name="plus" />;
export const ButtonConfirm = () => <ButtonIcon name="checkmark" />;
export const ButtonReject = () => <ButtonIcon name="cross" />;
export const ButtonHealthCategory = () => (
  <ButtonIcon
    name="medical_services"
    border="2px solid lightslategray"
    borderHover="2px solid #F9C70C"
  />
);
export const ButtonCreateWallet = () => <ButtonIcon name="user-plus" />;
export const ButtonHouseCategory = () => (
  <ButtonIcon
    name="home"
    border="2px solid lightslategray"
    borderHover="2px solid #F9C70C"
  />
);
export const ButtonEntertainmentCategory = () => (
  <ButtonIcon
    name="glass2"
    border="2px solid lightslategray"
    borderHover="2px solid #F9C70C"
  />
);
export const ButtonOtherCategory = () => (
  <ButtonIcon
    name="cog"
    border="2px solid lightslategray"
    borderHover="2px solid #F9C70C"
  />
);
export const ButtonTravelCategory = () => (
  <ButtonIcon
    name="airplane"
    border="2px solid lightslategray"
    borderHover="2px solid #F9C70C"
  />
);
export const ButtonFoodCategory = () => (
  <ButtonIcon
    name="spoon-knife"
    border="2px solid lightslategray"
    borderHover="2px solid #F9C70C"
  />
);
