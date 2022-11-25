import React, {useState} from 'react';

export default {
    title: 'useState demo',
};

function generateData() {
    return 5665651658948;
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateData);

    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    );
};