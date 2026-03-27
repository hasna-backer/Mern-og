import React from "react";


// STEP 1 — NORMAL COMPONENT


function Hello(props) {
  return  <div>
  <h1>Hello {props.name}</h1>
  <p>Age: {props.age}</p>
  <p>Place: {props.place}</p>
</div>
}


// STEP 2 — CREATE THE HOC


function withLogger(Component) {

  function WrappedComponent(props) {
    console.log("Component rendered");
    return <Component {...props} />;
  };

  return WrappedComponent;
}



const LoggedHello = withLogger(Hello);


function App() {
  return (
    <div style={{ padding: "40px" }}>
      <LoggedHello name="Basil" age={25} place="Nairobi" />
    </div>
  );
}

export default App;


