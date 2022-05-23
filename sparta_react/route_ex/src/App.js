import {Route} from 'react-router-dom';
import Home from './Home'
import Cat from './Cat'
import Dog from './Dog'

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home data={"imedata"}/>
      </Route>fg
      <Route path='/cat'>
        <Cat />
      </Route>
      <Route path='/dog'>
        <Dog />
      </Route>
    </div>
  );
}

export default App;
