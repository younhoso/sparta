import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom"
import Detail from './Detail';
import MyrateList from './MyrateList'
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

const day_dict = [
  {id: 1, nowday: "일"},
  {id: 2, nowday: "월"},
  {id: 3, nowday: "화"},
  {id: 4, nowday: "수"},
  {id: 5, nowday: "목"},
  {id: 6, nowday: "금"},
  {id: 7, nowday: "토"},
]

function App() {
  const [list, setList] = useState(day_dict);
  
  const [items, setItems] = useState(0);
  const week_rates = list.map((daynow, idx) => {
    const today = new Date().getDay();
    const day = today + idx > 6 //오늘을 기준으로 요일을 보여주기
      ? today + idx - 7
      : today + idx
    return {
      day: day_dict[day].nowday,
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
