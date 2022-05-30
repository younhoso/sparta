import {Route} from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Add from "./Add";
import "./reset.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Card />
      </Route>
      <Route path="/word/add" exact>
        <Add />
      </Route>
    </div>
  );
}

export default App;
