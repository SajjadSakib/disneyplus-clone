import React from 'react';
import './recommended.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function DisneyNew() {
    const disneynew = useSelector(state=>state.getMovies.disneynew);
    
    return (
        <div className='recommended'>
           <h2>Disneyplus New</h2>
           <div className='rc-container'>
           {disneynew.map((movie,key) => (
                  <div className='rc-items' key={key}>
                  <Link to={'/details/' + movie.id}>
                  <img src={movie.cardImg} alt="//"/>
                  </Link>
                  </div> )
               )}
            </div> 
        </div>
    )
}

export default DisneyNew;
