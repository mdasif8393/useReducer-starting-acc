import React, { useContext, useState } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {

    const {count, setCount} = useContext(COUNTER_CONTEXT)
    
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <div>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
            <button onClick={()=>setCount((prvState) => prvState + 1)}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default Child;
