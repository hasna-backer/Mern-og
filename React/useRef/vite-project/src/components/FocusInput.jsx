import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
