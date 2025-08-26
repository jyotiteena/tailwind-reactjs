import { useState } from "react"

const CounterFn = () => {

    // useState - return array type data,  its is hook, use for state handling , 
    // value1 => current value 
    // value2 = function , state updation

    // const [value,value2]= useState(initialValue)
    const [count, setCount] = useState(0);

    // const count = useState("hello")[0];
    // const setCount = useState("hello")[1]
    console.log(count)
    console.log(setCount)

    // const inc = ()=>{
    //     setCount(count+1)
    // }

    // const dec = ()=>{
    //     count > 0 ? setCount(count-1) : count
    // }

    const inc = ()=>{
        setCount(prev=>prev+1)
    }

    const dec = ()=>{
        setCount(prev=>prev>0 ? prev-1 : prev)
    }

    return (
        <div class=" text-center w-xl my-5 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2 className='text-2xl'>{count}</h2>

            <button type='button' onClick={inc} className='bg-gray-800 px-5'>+</button>
            <button type='button' onClick={dec} className='bg-red-800 px-5'>-</button>
        </div>
    )
}

export default CounterFn