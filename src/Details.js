import React,{useState,useEffect}from 'react';
import './details.css';
import {useSelector} from 'react-redux';
import db,{auth} from './Firebase';
import {useParams,useHistory} from 'react-router-dom';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';

function Details() {
    const history = useHistory();
    const user = useSelector(state=>state.setUser.user);

    const {id} =useParams();
    const [details,setdetails] = useState()
    useEffect(async() =>{
        db.collection('movies').doc(id).get()
        .then(doc=>{
            if(doc.exists){
                setdetails(doc.data())}
            else{
                console.log('Nothing Found');
            }
        })
        .catch(err=>console.log(err.type))

    
    },[id])

    //persisting session 
    useEffect(() => {
        auth.onAuthStateChanged( async(user)=>{
            
            if(user){
            
            
                history.push('/details/' + id)
            
                }
            })

    }, [user])
//    console.log(details) ;
  
    return (
        <>
        {details &&
        <div className='details'>
            
            <img src={details.backgroundImg} alt="" id='backgroundImg'/>
            <div id='titleImg'>
                <img src={details.titleImg} alt="" id='titleImg'/>
            </div>
            <div className='controls'>
                <div className="play item">
                    <PlayArrowIcon />
                    <span>PLAY</span>
                </div>
                <div className="trailer item">
                    <PlayArrowIcon />
                    <span>TRAILER</span>
                </div>
                <div className="item add">
                    <AddIcon/>
                </div>
                <div className="item group">
                    <GroupIcon/>
                </div>
            </div> 

        </div>}
        </>
    )
}

export default Details
