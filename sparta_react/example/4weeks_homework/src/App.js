import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";

function App() {
  const [name, setName] = useState("르탄이");

  return (
    <div className="App" style={{maxWidth: "350px", margin: "auto"}}>
      <Switch>
        <Route path="/" exact>
          <Start name={name} />
        </Route>
        <Route path="/quiz" exact>
          <Quiz />
        </Route>
        <Route path="/score" exact>
          <Score name={name} />
        </Route>
        <Route path="/message" exact>
          <Message name={name} />
        </Route>
        <Route path="/ranking" exact>
          <Ranking />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
