import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
