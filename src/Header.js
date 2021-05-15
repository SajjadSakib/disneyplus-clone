import React, { useCallback ,useEffect} from 'react';
import './header.css';
import { Avatar } from '@material-ui/core';
import Menu from './Menu';
import {useSelector,useDispatch} from 'react-redux';
import {onUserChange,setDropdown} from './actions';
import {auth,provider} from './Firebase';
import { useHistory } from "react-router-dom";
import firebase from 'firebase'


function Header (){
    
    // const [dropdown,setDropdown] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state=>state.setUser.user);
    const dropdown = useSelector(state=>state.getDropdown.dropdown);
    const changeUser = useCallback(
    (user) => dispatch(onUserChange(user)),
    [dispatch]
  );
  const changeDropdown = useCallback(
    (txt) => dispatch(setDropdown(txt)),
    [dispatch]
  );
  
    useEffect(() => {
        auth.onAuthStateChanged( async(user)=>{
            console.log(localStorage.getItem('disneyPlusUser'));
            if(user){
            changeUser(user);
            
            history.push('/home');
            
                }
            })

    }, [user])
    
    const handleAuth = () =>{
        if(!user){
        auth.signInWithPopup(provider)
            .then((result)=>{
                localStorage.setItem('disneyPlusUser', JSON.stringify(result.user));
                changeUser(result.user)})
            .catch((error)=>alert(error));
            }
        else{
        auth.signOut()
            .then(()=>{changeUser(null);
                        history.push('/');
                    })
            .catch(err=>alert(err.message));
        }
    }
    // componentDidMount(){
    //     auth.onAuthStateChanged(async (user)=>{
    //        if(user){
    //         this.setState({user:this.props.user});
           
    //        }
    //     })
        
        
    // }
    
        return (
            <div className='Navbar'>
                <div className='logo_item'>
                <img src={'/images/logo.svg'} className='logo' alt=""/>
                </div>
                
                {user && <Menu/>}
                <div className='button'>
                
                {!user?(<button onClick={handleAuth}>LOGIN</button>) :
                (<><Avatar src= {user.photoURL} onClick={()=>changeDropdown(!dropdown?'signout':'')}/>
                <span className={(dropdown === 'signout')?'active' :''}onClick={handleAuth}>SignOut</span></>)}
                </div>
                
            </div>
        )
    
}
export default Header;
