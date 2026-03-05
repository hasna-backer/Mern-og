import React, { useMemo, useState } from 'react'

const OptimizedExample = () => {

    const [count,setCount]=useState(0);
    const [dark,setDark]=useState(false);

    function slowFunction(num) {
        console.log("slow function running");
        for (let i = 0; i < 1000000000; i++) {}
        return num * 2;   
    }

    //useMemo Optimization
    const result = useMemo(()=>{
        return slowFunction(count);
    }, [count]);

    const themeStyles = {
        backgroundColor: dark ? "#333":"#fff",
        color: dark? "#fff":"#000",
        padding: "20px",
        marginTop: "20px"
    };


  return (
    <div style={themeStyles}>
        <h3>Optimized Version</h3>
        <p> Result: {result} </p>

        <button onClick={()=>setCount(count+1)} >
            Increase
        </button>

        <button onClick={()=>setDark(!dark)} style={{marginLeft:"10px"}} >
            Toggle theme
        </button>


    </div>
  )
}

export default OptimizedExample