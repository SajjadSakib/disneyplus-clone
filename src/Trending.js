import React from 'react';
import './recommended.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function Trending() {
    const trending = useSelector(state=>state.getMovies.trending);
    return (
        <div className='recommended'>
           <h2>Trending</h2>
           <div className='rc-container'>
               
               {trending.map((movie,key) => (
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

export default Trending;