import { useState } from "react";

function SlowExample() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  function slowFunction(num) {
    console.log("Slow function running...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  const result = slowFunction(count);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    marginTop: "20px"
  };

  return (
    <div style={themeStyles}>
      <p>Result: {result}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setDark(!dark)} style={{ marginLeft: "10px" }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default SlowExample;
