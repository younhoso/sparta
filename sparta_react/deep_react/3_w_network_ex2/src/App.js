import { useEffect } from "react";
import axios from "axios"

function App() {
  const callSomething = async() => {
    let data = {
      "day" : "일",
      "sleep_time": "10:00"
    }
    const response = await fetch("http://localhost:5001/sleep_times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });
    console.log(response)
  }
  const callSomethingAxios = () => {
    let data = {
      "day" : "금",
      "sleep_time": "10:00"
    }
    axios({
      method: "POST",
      url: "http://localhost:5001/sleep_times",
      data: data
    }).then(res => {
      console.log(res)
    });
  }


  useEffect(() => {
    // callSomething();
    callSomethingAxios();
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;