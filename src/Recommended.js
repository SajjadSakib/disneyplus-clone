import React from 'react';
import './recommended.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function Recommended() {
    const recommend = useSelector(state => state.getMovies.recommended );
    return (
        <div className='recommended'>
           <h2>Recommended</h2>

           <div className='rc-container'>
               
               {recommend.map((movie,key) => (
                  <div className='rc-items' key={key}>
                  <Link to={'/details/' + movie.id}>
                  <img src={movie.cardImg} alt="//"/>
                  </Link>
                  </div> )
               )}
               
               
               {/* <div className='rc-items'>
               <img src={process.env.PUBLIC_URL+'images/viewers-disney.png'} alt="//"/>
               </div>
               <div className='rc-items'>
               <img src={process.env.PUBLIC_URL+'images/viewers-disney.png'} alt="//"/>
               </div>
               <div className='rc-items'>
               <img src={process.env.PUBLIC_URL+'images/viewers-disney.png'} alt="//"/>
               </div> */}
            </div> 
        </div>
    )
}

export default Recommended
