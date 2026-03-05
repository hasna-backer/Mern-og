import SlowExample from "./components/SlowExample";
import OptimizedExample from "./components/OptimizedExample";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useMemo Performance Demo</h1>

      <SlowExample />

      <hr style={{ margin: "40px 0" }} />

      <OptimizedExample />
    </div>
  );
}

export default App;
