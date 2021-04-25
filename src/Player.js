import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from "./Footer"

function Player({ spotify }) {
    return (
    //   <h1> welcome to spotify!!</h1>
       
         
        <div className="player">
            <div className="player-body">
               {/* sidebar
               body */}
            <Sidebar />
            <Body spotify={ spotify } />
            </div>
             {/* footer  */}
             <Footer />
        </div>
    )
}

export default Player
