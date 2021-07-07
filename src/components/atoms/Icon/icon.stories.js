import React from "react";
// Component
import Icon from "./Icon";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "atoms/Icon",
  component: Icon,
};

export const userIcon = () => <Icon name="profile" />;
export const walletIcon = () => <Icon name="wallet" />;
export const showPocketList = () => <Icon name="menu" />;
export const pocketIcon = () => <Icon name="glass2" />;
