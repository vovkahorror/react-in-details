import React from "react";

type ItemType = {
    title: string;
    value: any;
}

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    /**
     * Callback that is called when title clicked
     */
    onChange: () => void;
    color?: string;
    items: ItemType[];
    onClick: (value: any) => void;
};

export function AccordionSecret(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onChange} color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

export const Accordion = React.memo(AccordionSecret);

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
    color?: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3
            style={{color: props.color ? props.color : 'black'}}
            onClick={e => props.onClick()}>{props.title}
        </h3>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[];
    onClick: (value: any) => void;
};

function AccordionBody(props: AccordionBodyPropsType) {
    const itemsList = props.items.map((item, index) => {
        return <li onClick={() => props.onClick(item.value)} key={index}>{item.title}</li>;
    });

    return (
        <ul>
            {itemsList}
        </ul>
    );
}

export default Accordion;
