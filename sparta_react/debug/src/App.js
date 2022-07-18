import { useEffect, useState } from "react";

function App() {
  const [val, setVal] = useState(['js공부', 'js디버깅']);

  function fn(){
   setVal(() => {
    return [...val, 'js 디버그2']
   })
  };

  return (
    <div className="App">
      <button onClick={fn}>버튼</button>
    </div>
  );
}

export default App;
