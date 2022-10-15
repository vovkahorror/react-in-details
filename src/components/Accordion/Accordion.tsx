import React from "react";

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    /**
     * Callback that is called when title clicked
     */
    onClick: () => void;
    color?: string;
};

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} color={props.color}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

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

function AccordionBody() {
    return (
        <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
    );
}

export default Accordion;
