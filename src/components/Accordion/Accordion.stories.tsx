import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from './Accordion';

const categoryObj = (categoryName: 'Main' | 'Event' | 'Color') => ({
    table: {
        category: categoryName,
    },
});

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        title: {
            ...categoryObj('Main'),
        },
        onClick: {
            ...categoryObj('Event'),
        },
        color: {
            control: 'color',
            ...categoryObj('Color'),
        },
    },
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

const accordionProps = {
    title: 'Menu',
    onClick: callback,
};

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    ...accordionProps,
    collapsed: true,
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    ...accordionProps,
    collapsed: false,
};

export const ChangeMode: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion {...args} collapsed={value} onClick={() => setValue(!value)}/>;
};

ChangeMode.args = {
    title: 'Menu',
};