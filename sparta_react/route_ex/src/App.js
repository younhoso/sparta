import {Route} from 'react-router-dom';
import Home from './Home'
import Cat from './Cat'
import Dog from './Dog'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/cat/:cat_name' component={Cat} />
      <Route path='/dog' component={Dog} />
    </div>
  );
}

export default App;
