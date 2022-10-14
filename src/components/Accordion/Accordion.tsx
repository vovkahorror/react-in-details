import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: () => void;
};

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={e => props.onClick()}>{props.title}</h3>;
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
