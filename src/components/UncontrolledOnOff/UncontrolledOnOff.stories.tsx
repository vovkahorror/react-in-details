import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

export const OnMode = () => <UncontrolledOnOff defaultOn={true}/>;
export const OffMode = () => <UncontrolledOnOff defaultOn={false}/>;
