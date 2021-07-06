import React from 'react';
import './viewer.css'

function Viewer() {
    return (
      <>   
     
        <div className='viewer'>
             
           <div className="viewer_item">
                <img src={'/images/viewers-disney.png'} alt="//"/>
                <video src={'/videos/1564674844-disney.mp4'} muted={true} autoPlay={true} loop={true} playsInline={true}></video>
           </div> 
           <div className="viewer_item">
                <img src={'/images/viewers-marvel.png'} alt="//"/>
                <video src={'/videos/1564676115-marvel.mp4'} muted={true} autoPlay={true} loop={true} playsInline={true}></video>
           </div>
           <div className="viewer_item">
                <img src={'/images/viewers-national.png'} alt="//"/>
                <video src={'/videos/1564676296-national-geographic.mp4'} muted={true} autoPlay={true} loop={true} playsInline={true}></video>
           </div>
           <div className="viewer_item">
                <img src={'/images/viewers-pixar.png'} alt="//"/>
                <video src={'/videos/1564676714-pixar.mp4'} muted={true} autoPlay={true} loop={true} playsInline={true}></video>
           </div>
           <div className="viewer_item">
                <img src={'/images/viewers-starwars.png'} alt="//"/>
                <video src={'/videos/1608229455-star-wars.mp4'} muted={true} autoPlay={true} loop={true} playsInline={true}></video>
           </div>
        </div>
        </>
    )
}

export default Viewer
