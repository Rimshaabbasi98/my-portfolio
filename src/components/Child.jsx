import React from 'react'

const Child = ({ todo, addtodo }) => {
    console.log("TODO RE-RENDER");
    
    return (
        <div className='py-8 text-center'> 
            <button onClick={addtodo} className='bg-gray-500 py-2 px-4 rounded'>Add Todo</button>
            {
                todo.map((todo, index) => {
                    return (
                        <div key={index}>
                            {todo}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Child
