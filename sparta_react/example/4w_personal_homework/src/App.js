import {Route} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header";
import Card from "./Card";
import FormInput from "./FormInput"
import AddBtn from "./AddBtn"
import "./reset.css";
import {loadLanguageFB} from './redux/modules/language'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLanguageFB())
  },[])

  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Card />
        <AddBtn />
      </Route>
      <Route path="/word/add" exact>
        <FormInput name="추가"/>
      </Route>
      <Route path="/word/:id/edit" exact>
        <FormInput nameTit="수정"/>
      </Route>
    </div>
  );
}

export default App;
