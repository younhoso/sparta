import { useEffect } from "react";

function App() {
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5001/sleep_times");
    xhr.send();

    // XMLHttpRequest.readyState
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4) {
        console.log(xhr.responseText);
      }
    }

    xhr.onload = function() {
      console.log(xhr.responseText);
    }
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;