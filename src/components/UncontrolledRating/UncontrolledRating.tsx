import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";

type UncontrolledRatingPropsType = {
    defaultValue: RatingValueType;
    onClick: (value: RatingValueType) => void;
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} setValue={() => {
                setValue(1);
                props.onClick(1);
            }}/>
            <Star selected={value > 1} setValue={() => {
                setValue(2);
                props.onClick(2);

            }}/>
            <Star selected={value > 2} setValue={() => {
                setValue(3);
                props.onClick(3);

            }}/>
            <Star selected={value > 3} setValue={() => {
                setValue(4);
                props.onClick(4);

            }}/>
            <Star selected={value > 4} setValue={() => {
                setValue(5);
                props.onClick(5);

            }}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    setValue: () => void;
};

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.setValue()}>
            {props.selected ? <b>The best!</b> : 'The best!'}{" "}
        </span>
    );
}

export default UncontrolledRating;
