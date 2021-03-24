import React from 'react';
// Component
import Span from './Span';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "span text",
    component: Span
}

export const userName = () => <Span fontSize="user">Christian Camilo</Span>
export const title = () => <Span fontSize="title" weight="title"> Create Pocket</Span>
export const subTitle = () => <Span fontSize="subtitle" color="subtitle">$200.000</Span>
export const category = () => <Span fontSize="category" weight="category">Entertainment</Span>
export const message = () => <Span fontSize="message" color="message">How much money do you want to add?</Span>
export const pocketTitle = () => <Span>Partys</Span>
