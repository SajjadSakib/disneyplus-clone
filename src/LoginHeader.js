import React, { useCallback ,useEffect} from 'react';
import './header.css';
import {useSelector,useDispatch} from 'react-redux';
import {onUserChange,setDropdown} from './actions';
import {auth,provider} from './Firebase';
import { useHistory } from "react-router-dom";

function LoginHeader() {
    const history = useHistory();
    const dispatch = useDispatch();
    const changeUser = useCallback(
        (user) => dispatch(onUserChange(user)),
        [dispatch]
      );
    

    const handleAuth = () =>{
        
        auth.signInWithPopup(provider)
            .then((result)=>{
                localStorage.setItem('disneyPlusUser', JSON.stringify(result.user));
                changeUser(result.user)})
            .then(history.push('/home'))
            .catch((error)=>alert(error));
    }
    return (
        <div className='Navbar'>
                <div className='logo_item'>
                <img src={'/images/logo.svg'} className='logo' alt=""/>
                </div>

                <div className='button'>
                
                <button onClick={handleAuth}>LOGIN</button>
                
                </div>
                
            </div>
    )
}

export default LoginHeader
