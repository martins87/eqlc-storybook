import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button
}

export const Normal = () => <Button transparent={false} width="850px" height="50px">Confirm</Button>
export const Transparent = () => <Button transparent width="850px" height="50px">Deposit</Button>