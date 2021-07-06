import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';
import Header from './Header';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setDropdown} from './actions';
import Details from './Details';

import {onUserChange} from './actions';

const mapStateToProps = (state) =>({
  dropdown : state.getDropdown.dropdown,
  user: state.setUser.user
})

const mapDispatchToProps = (dispatch) =>{
  return{
    changeDropdown : (txt)=>dispatch(setDropdown(txt)),
    onUserChange: (user)=>dispatch(onUserChange(user))
  }
  
}


class App extends Component {
  

  //functional hooks
//   const dispatch = useDispatch();
//   const dropdown = useSelector(state=>state.getDropdown.dropdown);
//   const user = useSelector(state=>state.setUser.user);
//   const changeDropdown = useCallback(
//     (txt) => dispatch(setDropdown(txt)),
//     [dispatch]
//   );
//   const handleDropdown = () =>{
//     if(dropdown){
//       changeDropdown('')
//     }
//   }

//   const changeUser = useCallback(
//     (user) => dispatch(onUserChange(user)),
//     [dispatch]
//   );
//   useEffect(() => {
//     auth.onAuthStateChanged( async(user)=>{
//         console.log(localStorage.getItem('disneyPlusUser'));
//         if(user){
//         changeUser(user);
        
        
        
//             }
//         })

// }, [user])

componentDidMount(){
  const localUser= JSON.parse(localStorage.getItem('disneyPlusUser'));
  if(localUser){
    this.props.onUserChange(localUser);
    
  }
  console.log(this.localUser);
}



handleDropdown = () =>{
  if(this.props.dropdown){
          this.props.changeDropdown('')
        }
}




  render(){
    const user = this.props.user;

  return (
    <div className="App" onClick={this.handleDropdown}>
      
      <Router>
        <Header /> 
        
      
        <Switch>
        
          <Route exact path='/'>
          {this.localUser ?  <Redirect to="/home" /> : <Login />  }
            
          </Route> 
          
          <Route exact path='/home'>
            
          <Home /> 
            
          </Route>
          <Route exact path="/details/:id">
            
            <Details/>
          </Route> 
          <Route render={()=>(<h1>404 Not Found</h1>)} />
        </Switch>
      </Router>
      
    </div>
  );
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
