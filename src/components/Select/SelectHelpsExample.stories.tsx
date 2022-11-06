import {Select} from "./Select";
import React, {useMemo, useState} from "react";

export default {
    title: 'SelectHelpsExample',
    component: Select,
};

const SelectMemo = React.memo(Select);

export const SelectHelpsExample = () => {
    const [counter, setCounter] = useState(0);
    const [cities1, setCities1] = useState([
        {value: '1', title: 'Kyiv', population: 1000000},
        {value: '2', title: 'Kherson', population: 300000},
        {value: '3', title: 'Khmelnytskyi', population: 550000},
    ]);
    const [cities2, setCities2] = useState([
        {value: '1', title: 'Kyiv', population: 1000000},
        {value: '2', title: 'Kherson', population: 300000},
        {value: '3', title: 'Khmelnytskyi', population: 550000},
    ]);
    const [value, setValue] = useState('3');

    const getOnlyIncludesN = useMemo(() => {
        return cities1.filter(city => city.title.toLowerCase().includes('n'));
    }, [cities1]);
    const getPopulationMoreThanHalfMillion = useMemo(() => {
        return cities2.filter(city => city.population > 500000);
    }, [cities2]);

    return (
        <>
            <div style={{display: 'flex', gap: '40px', marginBottom: '100px'}}>
                <SelectMemo
                    onChange={setValue}
                    value={value}
                    items={getOnlyIncludesN}
                />
                <button onClick={() => setCities1([...cities1, {
                    value: '4',
                    title: 'Novopetrivka',
                    population: 500,
                }])}>Add city "n"
                </button>
            </div>
            <div style={{display: 'flex', gap: '40px', marginBottom: '100px'}}>
                <SelectMemo
                    onChange={setValue}
                    value={value}
                    items={getPopulationMoreThanHalfMillion}
                />
                <button onClick={() => setCities2([...cities2, {
                    value: '4',
                    title: 'Odesa',
                    population: 700000,
                }])}>Add city with large population
                </button>
            </div>
            <div>
                {counter}
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </>
    );
};

