import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: (collapsed: boolean) => void;
};

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    onClick: (collapsed: boolean) => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>;
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
