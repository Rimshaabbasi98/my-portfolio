import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    useMemo(() => {
        return repeat(count)
    }, [count]);

    const cssStyle = ({
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    })
    return (
        <div style={cssStyle} className='py-40 text-center'>
            <h1>UseMemo Hooks</h1>
            <input type="number" placeholder='number' value={count} onChange={(e) => setCount(e.target.value)} className='bg-gray-400 border-black' />
            <button onClick={() => setDark(!dark)}>Change Theme</button>
        </div>
    )
}
function repeat(num) {
    for (let i=0; i<=1000; i++) { }
    return num
}

export default Memo
// import React, { useMemo, useState } from 'react'

// const [count, setCount]= useState(0);
// const [dark, setDark]= useState(false);
// useMemo(()=>{
//     return repeat
// }, [count])
//  const cssStyle = ({
//     backgroundColor: dark ? "black" : "white",
//         color: dark ? "white" : "black"
//  })
// const Memo = () => {
//   return (
//     <div style={cssStyle}>
//         <input type="number" placeholder='number' value={count} onChange={(e)=> setCount(e.target.value)} />
//         <button onClick={()=>setDark(!dark)}>Toggle</button>
      
//     </div>
//   )
// }
// function repeat(num){
//     for (let i=0; i<=1000; i++) { }
//     return num
// }

// export default Memo
