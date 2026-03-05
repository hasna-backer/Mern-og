import React, { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {

    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      setData(result);
    }

    getData();

  }, []);

  return <div>{data?.title}</div>;
}

export default App;