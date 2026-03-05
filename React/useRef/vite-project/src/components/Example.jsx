import { useState, useRef } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);

  console.log("Component Rendered");

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {refCount.current}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase State
      </button>

      <button onClick={() => {
        refCount.current += 1;
        console.log("Ref value:", refCount.current);
      }}>
        Increase Ref
      </button>
    </div>
  );
}

export default Example;


// Basic Syntax
// const ref = useRef(initialValue);

// It returns an object:
// { current: initialValue }

// You access or modify using:
// ref.current
