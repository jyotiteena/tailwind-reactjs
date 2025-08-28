import { useEffect, useState } from "react"

const UseEffectHook = () => {
    const [user,setUser] = useState([])
    useEffect(() => {
        document.title = "use effect"
    }, [])

    // var data = []
    async function showApi() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUser(data)
        // console.log(data)
    }

    // showApi()

    useEffect(()=>{
        showApi()
    },[])

    console.log("user...........")
    console.log(user)
    // [] => dependancy
    var colors = {color:'red'}
    return (
        <>
            <h1 style={{color:'red'}}>UseEffectHook</h1>
            <h1 style={colors}>UseEffectHook</h1>
            <h1 class="textcolor">UseEffectHook</h1>
        </>
    )
}

export default UseEffectHook