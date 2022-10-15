import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {OnOff} from './OnOff';

export default {
    title: 'components/OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

const callback = action('on or off clicked');

export const OnMode = () => <OnOff on={true} setOn={callback}/>;
export const OffMode = () => <OnOff on={false} setOn={callback}/>;
export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true);

    return <OnOff on={value} setOn={setValue}/>;
};
