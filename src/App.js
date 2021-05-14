import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';
import Header from './Header';
import React, { useCallback } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setDropdown} from './actions';
import Details from './Details';

function App() {
  const dispatch = useDispatch();
  const dropdown = useSelector(state=>state.getDropdown.dropdown);
  const changeDropdown = useCallback(
    (txt) => dispatch(setDropdown(txt)),
    [dispatch]
  );
  const handleDropdown = () =>{
    if(dropdown){
      changeDropdown('')
    }
  }
  return (
    <div className="App" onClick={handleDropdown}>
      
      <Router>
        <Header />
      
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
