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
                    <span><a href='/home'>SEARCH</a></span>
                </div>
                <div className='menu_items nc'>
                    <AddIcon />
                    <span><a href='/home'>WATCHLIST</a></span>

                </div>
                <div className='menu_items'>
                    <StarIcon />
                    <span><a href='/home'>ORIGINAL</a></span>

                </div>
                <div className='menu_items'>
                    <MovieIcon/>
                    <span><a href='/home'>MOVIES</a></span>

                </div>
                <div className='menu_items'>
                    <LiveTvIcon/>
                    <span><a href='/home'>SERIES</a></span>

                </div>
        </div>
    )
}

export default Menu
