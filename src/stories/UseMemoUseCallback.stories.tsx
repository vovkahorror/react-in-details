import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo',
};

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = resultA;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    );
};

const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    );
};
const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Vova', 'Nastya', 'Petro', 'Sasha']);

    const newArray = useMemo(() => {
        return users.filter(user => user.toLowerCase().includes('a'));
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, 'Pavlik ' + new Date().getTime()];
        setUsers(newUsers);
    };

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    );
};

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

    const newArray = useMemo(() => {
        return books.filter(book => book.toLowerCase().includes('s'));
    }, [books]);

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, 'Computer Science ' + new Date().getTime()];
            setBooks(newUsers);
        };
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, 'Computer Science ' + new Date().getTime()];
        setBooks(newUsers);
    }, [books]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books books={newArray} addBook={memoizedAddBook2}/>
        </>
    );
};

const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    return (
        <div>
            <button onClick={props.addBook}>add book</button>

            {props.books.map((b, i) => <div key={i}>{b}</div>)}
        </div>
    );
};
const Books = React.memo(BooksSecret);