import React from 'react';
import './menu.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import MovieIcon from '@material-ui/icons/Movie';
import LiveTvIcon from '@material-ui/icons/LiveTv';



function Menu() {
    return (
        <div className='menu'>
                <div className='menu_items'>
                    <HomeIcon/>
                    <span ><a href='/home'>HOME</a></span>
                </div>
                <div className='menu_items'>
                    <SearchIcon />
                    <span>SEARCH</span>
                </div>
                <div className='menu_items nc'>
                    <AddIcon />
                    <span>WATCHLIST</span>

                </div>
                <div className='menu_items'>
                    <StarIcon />
                    <span>ORIGINAL</span>

                </div>
                <div className='menu_items'>
                    <MovieIcon/>
                    <span>MOVIES</span>

                </div>
                <div className='menu_items'>
                    <LiveTvIcon/>
                    <span>SERIES</span>

                </div>
        </div>
    )
}

export default Menu
