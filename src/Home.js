import React,{useEffect,useCallback} from 'react';
import './home.css';
import ImgSlider from './ImgSlider';
import Viewer from './Viewer';
import Recommended from './Recommended';
import DisneyNew from './DisneyNew';
import Trending from './Trending';
import Original from './Original';
import {useSelector,useDispatch} from 'react-redux';
import db from './Firebase';
import {setMovies} from './actions';
import {useHistory} from 'react-router-dom';


function Home(){
    const history = useHistory();
    const user=useSelector(state=>state.setUser.user);
    const localUser= JSON.parse(localStorage.getItem('disneyPlusUser'));
    if(!localUser){
        history.push('/');
        
    }
    const dispatch = useDispatch();
    const setMovieList = useCallback(
        (movie) => dispatch(setMovies(movie)),
        [dispatch]
      );
    // uploadMovie = () =>{
    //     this.movielist.forEach((item)=>{
    //         db.collection('movies').add(item)
    //     });
    // }
    let recommended=[];
    let original =[];
    let Disneynew= [];
    let trending =[];
    
    useEffect(async() => {
        db.collection('movies').onSnapshot(
            (snapshot) =>{
                snapshot.docs.map((doc)=>{
                    switch(doc.data().type){
                        case 'recommend' :
                            recommended.push({id:doc.id,...doc.data()});
                            break;
                        case 'original' :
                            original.push({id:doc.id,...doc.data()});
                            break;
                        case 'new' :
                            Disneynew.push({id:doc.id,...doc.data()});
                            break;
                        case 'trending' :
                            trending.push({id:doc.id,...doc.data()});
                            break;
                    }
                    
                  
                })
                setMovieList({
                    recommended, original,Disneynew,trending
                })
                

            }
        )
        
        
    }, [user])

    
    return (
        <div className='home'>
            <ImgSlider/>
            <Viewer/>
            <Recommended/>
            <DisneyNew/>
            <Trending/>
            <Original/>
            {/* <button onClick={this.uploadMovie}>Upload Movie</button> */}
        </div>
    )
    
}
export default Home;
