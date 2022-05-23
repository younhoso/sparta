import React, {useState} from "react";
import {Route, Switch} from "react-router-dom"
import Detail from './Detail';
import MyrateList from './MyrateList'
import './App.css';

function getRandonNum(n) {
  return Math.floor(Math.random(n));
}

function App() {
  const [list, setList] = useState(["월", "화", "수", "목", "금", "토", "일"]);
  const week_rates = list.map((day, idx) => {
    return {
      day: day,
      rate: Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1)
    }
  });

  return (
    <div className="App">
      <h3>내 일주일은?</h3>
      <Switch>
        <Route exact path="/"
          render={() => (
            <MyrateList list={week_rates} />
          )}
        />
        <Route path="/detail/:name" component={Detail}/>
      </Switch>
    </div>
  );
}

export default App;
