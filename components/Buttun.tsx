"use client"
import { useState } from "react";

export default function Buttun(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(() => 
            count + 1
        )
    }  
    return(
        <div>
            <button onClick={handleClick}>Click me! {count}</button>
        </div>
    )
}