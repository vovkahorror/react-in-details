import React, {useState} from "react";

type AccordionPropsType = {
  title: string;
};

function UncontrolledAccordion(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <AccordionTitle title={props.title}/>
      <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
      {!collapsed && <AccordionBody/>}
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

export default UncontrolledAccordion;
