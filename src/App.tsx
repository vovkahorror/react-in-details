import React, {useState} from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    return (
        <div>
            <Greeting title={"Hello, Nastyusha!"}/>
            <Accordion title={"Tittle 1"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <hr/>
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
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
