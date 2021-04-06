import React from "react";
// Component
import Icon from "./Icon";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Icon",
  component: Icon,
};

export const userIcon = () => <Icon name="profile" />;
export const walletIcon = () => <Icon name="wallet" />;
export const showPocketList = () => <Icon name="menu2" />;
export const pocketIcon = () => <Icon name="glass2" />;
