import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('2');

    return (
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Kyiv'},
                {value: '2', title: 'Kherson'},
                {value: '3', title: 'Khmelnytskyi'},
            ]}
        />
    );
};

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return (
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Kyiv'},
                {value: '2', title: 'Kherson'},
                {value: '3', title: 'Khmelnytskyi'},
            ]}
        />
    );
};