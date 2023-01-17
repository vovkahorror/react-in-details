import React, {FC} from "react";
import {ClockViewPropsType} from "./Clock";

export const getTwoDigitsString = (number: number) => number < 10 ? '0' + number : number;

export const DigitalClockView: FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            <span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </>
    );
};