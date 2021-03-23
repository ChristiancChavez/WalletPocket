import React from 'react';
// Component
import Span from './Span';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "span text",
    component: Span
}

export const userName = () => <Span fontSize="user" weight="" color="">userName</Span>
export const title = () => <Span fontSize="title" weight="" color="">title</Span>
export const subTitle = () => <Span fontSize="subtitle" weight="" color="">subTitle</Span>
export const category = () => <Span fontSize="category" weight="" color="">category</Span>
export const message = () => <Span fontSize="message" weight="" color="">message</Span>
export const pocketTitle = () => <Span weight="" color="">pocketTitle</Span>
