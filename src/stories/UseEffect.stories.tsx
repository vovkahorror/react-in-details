import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo',
};

export const Example1 = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {

    })

    return (
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};