import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo',
};

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1);
        }, 1000);
    }, []);

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const [seconds, setSeconds] = useState(date.getSeconds());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setSeconds(state => state < 59 ? state + 1 : 0);
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            <div>{hours}:{minutes}:{seconds}</div>
            <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('Component rendered');

    useEffect(() => {
        console.log('Effect occurred');

        return () => {
            console.log('Reset Effect');
        };
    }, []);

    return (
        <>
            Hello, counter: {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered');

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key);
        };

        window.addEventListener('keypress', handler);

        return () => {
            window.removeEventListener('keypress', handler);
        };
    }, [text]);

    return (
        <>
            Typed text: {text}
        </>
    );
};

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered');

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('Timeout expired');
            setText('3 seconds passed');
        }, 3000);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [text]);

    return (
        <>
            Typed text: {text}
        </>
    );
};