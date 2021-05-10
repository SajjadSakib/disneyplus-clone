import React, { Component } from 'react';
import './header.css';
import { Avatar } from '@material-ui/core';
import Menu from './Menu';
import {connect} from 'react-redux';
import {onUserChange} from './actions';
import {auth,provider} from './Firebase';


const mapStateToProps = (state) =>({
    user:state.user
})

const mapDispatchToProps = (dispatch) =>({
    changeUser: (user)=>dispatch(onUserChange(user))
})
class Header extends Component {
    constructor(){
        super();
        this.state = {
            user:''
        }
    }
    
    handleAuth = () =>{
        auth.signInWithPopup(provider)
            .then((result)=>{
                localStorage.setItem('authUser', JSON.stringify(result.user));
                this.props.changeUser(result.user)})
            .catch((error)=>alert(error));
    }
    componentDidMount(){
        auth.onAuthStateChanged(async (user)=>{
           if(user){
            this.setState({user:this.props.user});
           
           }
        })
        
        
    }
    render() {
        const user = this.props.user;
        return (
            <div className='Navbar'>
                <div className='logo_item'>
                <img src={process.env.PUBLIC_URL+'images/logo.svg'} className='logo' alt=""/>
                </div>
                
                {user && <Menu/>}
                <div className='button'>
                
                {!user?(<button onClick={this.handleAuth}>LOGIN</button>) :
                <Avatar src= {user.photoURL}/>}
                </div>
                
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
