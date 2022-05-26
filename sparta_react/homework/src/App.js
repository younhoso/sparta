import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom"
import Detail from './Detail';
import MyrateList from './MyrateList'
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [list, setList] = useState(["월", "화", "수", "목", "금", "토", "일"]);
  
  const [items, setItems] = useState(0);
  const week_rates = list.map((day, idx) => {
    return {
      day: day,
      rate: random(5),
    }
  });
  const newRates = week_rates.map(el => el.rate);
  const aver = (arr) => arr.reduce((acc, cur) => acc + cur) / arr.length;

  const handleLoad = () => {
   const val = aver(newRates).toFixed(1);
   setItems(val)
  }

  const handleClear = () => {
    setItems(0)
	}

  useEffect(() => {
    handleLoad()
  },[])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/"
          render={() => (
            <MyrateList aver={items} list={week_rates} clear={handleClear} />
          )}
        />
        <Route path="/detail/:name" component={Detail}/>
      </Switch>
    </div>
  );
}

export default App;
