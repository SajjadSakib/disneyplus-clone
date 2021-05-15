import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';
import Header from './Header';
import React, { useCallback ,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setDropdown} from './actions';
import Details from './Details';
import LoginHeader from './LoginHeader';
import {auth} from './Firebase'
import {onUserChange} from './actions'

function App() {
  const dispatch = useDispatch();
  const dropdown = useSelector(state=>state.getDropdown.dropdown);
  const user = useSelector(state=>state.setUser.user);
  const changeDropdown = useCallback(
    (txt) => dispatch(setDropdown(txt)),
    [dispatch]
  );
  const handleDropdown = () =>{
    if(dropdown){
      changeDropdown('')
    }
  }

  const changeUser = useCallback(
    (user) => dispatch(onUserChange(user)),
    [dispatch]
  );
  useEffect(() => {
    auth.onAuthStateChanged( async(user)=>{
        console.log(localStorage.getItem('disneyPlusUser'));
        if(user){
        changeUser(user);
        
        
        
            }
        })

}, [user])
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
