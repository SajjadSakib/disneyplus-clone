import React from 'react';
import './recommended.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function Original() {
    const original = useSelector(state=>state.getMovies.original);
    return (
        <div className='recommended'>
           <h2>Original</h2>
           <div className='rc-container'>
           {original.map((movie,key) => (
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

export default Original;
