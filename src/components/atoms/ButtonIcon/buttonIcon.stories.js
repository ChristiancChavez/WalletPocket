import React from "react";
// Component
import ButtonIcon from "./ButtonIcon";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "atoms/Button Icon",
  component: ButtonIcon,
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    name: "coin-dollar",
    color: 'blue'
  }
};

const Template = (args) => <ButtonIcon {...args} />;
export const ButtonAddMoney = Template.bind({});

ButtonAddMoney.args = {
  name: "coin-dollar", 
  color: 'blue'
};

export const ButtonRemovePocket = () => <ButtonIcon name="bin2" />;
export const ButtonCreatePocket = () => <ButtonIcon name="plus" />;
export const ButtonConfirm = () => <ButtonIcon name="checkmark" />;
export const ButtonReject = () => <ButtonIcon name="cross" />;
export const ButtonHealthCategory = () => <ButtonIcon name="medical_services" />;
export const ButtonCreateWallet = () => <ButtonIcon name="user-plus" />;
export const ButtonHouseCategory = () => <ButtonIcon name="home" />;
export const ButtonEntertainmentCategory = () => <ButtonIcon name="glass2" />;
export const ButtonOtherCategory = () => <ButtonIcon name="cog" />;
export const ButtonTravelCategory = () => <ButtonIcon name="airplane" />;
export const ButtonFoodCategory = () => <ButtonIcon name="spoon-knife" />;
