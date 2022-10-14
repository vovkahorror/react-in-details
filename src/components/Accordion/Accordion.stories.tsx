import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired');

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onClick={callback}/>;
export const UncollapsedMode = () => <Accordion title={'Menu'} collapsed={false} onClick={callback}/>;
export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion title={'Menu'} collapsed={value} onClick={() => setValue(!value)}/>;
};
