// import React from "react";
// class About extends React.Component{}

import { Component } from "react";
import CardUi from "../layout/CardUi";

class About extends Component {
    render() {
        var a = 10;
        var b = 20;

        const show = () => {
            alert("helllooooo")
        }

        const data  = (id)=>{
            alert(id)
        }
        return (
            <>
                <h1>About us {a + b}</h1>
                <CardUi title="Noteworthy technology acquisitions 2021" para="biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." image="vite.svg" />
                <button onClick={show} class="bg-blue-500 hover:bg-blue-700 text-white hover:text-amber-300 font-bold py-2 px-4 rounded hover:rounded-full">
                    Click Me
                </button>
                 <button onClick={()=>data('1')} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Click Me
                </button>
            </>
        )
    }
}

export default About