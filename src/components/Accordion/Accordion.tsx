import React from "react";

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>;
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
