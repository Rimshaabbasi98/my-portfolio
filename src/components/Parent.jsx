import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const add = () => {
        setCount((e) => e + 1);
    }

    const addtodo = () => {
        setTodo((t) => [...t, "New Todo List"])
    }
    return (
        <>
            <Child todo={todo} addtodo={addtodo} />
            <div>
                <h2 className='text-2xl'>{count}</h2>
                <button onClick={add}>Update</button>
            </div>
        </>
    )
}

export default Parent
