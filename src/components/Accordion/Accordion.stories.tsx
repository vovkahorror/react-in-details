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
        onChange: {
            ...categoryObj('Event'),
        },
        color: {
            control: 'color',
            ...categoryObj('Color'),
        },
    },
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

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
    items: [
        {title: 'Nastya', value: 1},
        {title: 'Vova', value: 2},
        {title: 'Sasha', value: 3},
        {title: 'Pavlik', value: 4},
    ],
    onClick() {
        onClickCallback();
    },
};

export const ChangeMode: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion
        {...args}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: 'Nastya', value: 1},
            {title: 'Vova', value: 2},
            {title: 'Sasha', value: 3},
            {title: 'Pavlik', value: 4},
        ]}
        onClick={onClickCallback}
    />;
};

ChangeMode.args = {
    title: 'Menu',
};