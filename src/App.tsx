import React, {useState} from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState(false);

    return (
        <div>
            <Greeting title={"Hello, Nastyusha!"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={"Tittle 1"}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[]}
                       onClick={(x) => x}
            />
            <OnOff on={on} setOn={setOn}/>


            <hr/>
            <UncontrolledRating/>
            <UncontrolledAccordion title={"Tittle 1"}/>
            <UncontrolledOnOff/>
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
