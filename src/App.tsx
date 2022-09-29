import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

function App() {
  return (
    <div>
      <Accordion title={"Tittle 1"} collapsed={false}/>
      <Accordion title={"Tittle 2"} collapsed={true}/>
      <Greeting title={"Hello, React!"}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Greeting title={"Hello, Nastyusha!"}/>

      <hr/>
      <OnOff/>
      <OnOff/>
      <UncontrolledAccordion title={"Tittle 1"}/>
      <UncontrolledAccordion title={"Tittle 2"}/>
      <UncontrolledRating/>
      <UncontrolledRating/>
    </div>
  );
}

type GreetingPropsType = {
  title: string;
};

function Greeting(props: GreetingPropsType) {
  return <>{props.title}</>;
}

export default App;
