import React from "react";
import Start from "./Start";


function App() {
  const [name, setName] = React.useState("르탄이");  


  return (
    <div className="App" style={{
      maxWidth: "350px",
      margin: "auto"
    }}>
      <Start name={name}/>
    </div>
  );
}

export default App;