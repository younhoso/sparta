import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import FormInput from "./components/FormInput"
import Home from "./components/Home";
import {loadLanguageFB} from './redux/modules/language';
import "./reset.css";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLanguageFB())
  },[])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/word/add" component={FormInput} />
        <Route path="/word/:id/edit" component={FormInput} />
      </Switch>
    </div>
  );
}

export default App;
