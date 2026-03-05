import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Child = () => {
  // Access role directly from context
  const { role } = useContext(UserContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>{role}</p>
    </div>
  );
};









