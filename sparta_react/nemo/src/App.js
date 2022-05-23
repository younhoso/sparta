import React from "react"

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 3,
    }
  }

  componentDidMount(){

  }

  render() {
    const nemo_count = Array.from({length: this.state.count}, (v ,i) => i)
    console.log(nemo_count)
    return (
      <div className="App">
        {nemo_count.map((v, i) => {
          return (
            <div key={i} style={{
              width:"150px",
              height:"150px",
              backgroundColor: "#ddd",
              margin: "10px"
            }}>
              nemo
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
