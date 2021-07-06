import React,{useEffect,useCallback} from 'react';
import './login.css';
import {useSelector,useDispatch} from 'react-redux';
import {auth} from './Firebase'
import {onUserChange} from './actions';
import { useHistory } from "react-router-dom";

function Login () {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.setUser.user);
    const changeUser = useCallback(
        (user) => dispatch(onUserChange(user)),
        [dispatch]
      );
    useEffect(() => {
        auth.onAuthStateChanged( async(user)=>{
            
            if(user){
            changeUser(user);
            
            history.push('/home');
            
                }
            })

    }, [user])    
    return (
        <section>
            
            <div className='login'>
                <img src={process.env.PUBLIC_URL+'images/cta-logo-one.svg'} className='cataloge-top' alt=""/>
                
                <a href='abc.com'>GET STARTED</a>
                <p>There are many variations of passages 
                    of Lorem Ipsum available, but the majority 
                    have suffered alteration in some form, by injected humour, 
                    or randomised words which don't look even slightly believable.
                     If you are going to use a passage of Lorem Ipsum, you need to be 
                     sure there isn't anything embarrassing hidden in 
                     the middle of text
                </p>
                <img src={process.env.PUBLIC_URL+'images/cta-logo-two.png'} className='cataloge-bottom' alt=""/>
            </div>
        </section>
    )
}

export default Login;
