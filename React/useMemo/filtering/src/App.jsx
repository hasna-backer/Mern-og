// Import React and required hooks
import React, { useState, useMemo } from "react";

function App() {

  // State to store the search input value
  const [search, setSearch] = useState("");

  // Unrelated state just to trigger re-render
  const [count, setCount] = useState(0);

  // Simple array of items (static data)
  // This simulates data coming from database/API
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Watermelon",
    "Strawberry",
    "Blueberry",
    "Papaya"
  ];

  // useMemo is used to memoize (cache) the filtered result
  // It will re-run ONLY when 'search' changes
  const filteredItems = useMemo(() => {

    console.log("Filtering running...");

    // Filter items based on search input (case-insensitive)
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]); 
  // Dependency array → recompute only when 'search' changes
console.log(filteredItems);

  return (
    <div>

      {/* Input field to update search state */}
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Button updates unrelated state */}
      {/* Without useMemo, filtering would run again on this click */}
      <button onClick={() => setCount(count + 1)}>
        Unrelated State {count}
      </button>

      {/* Display first 5 filtered items */}
      <ul>
        {filteredItems.slice(0, 5).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
