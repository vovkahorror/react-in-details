import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledAccordion>;

export const CollapsedMode = () => <UncontrolledAccordion title={'Menu'}/>;
export const ChangeMode = () => {
    return <UncontrolledAccordion title={'Menu'}/>;
};
