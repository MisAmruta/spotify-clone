import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

    const [{ playlists },dispatch] = useDataLayerValue();

     console.log(playlists);
    return (
        <div className="sidebar">
          <img className="sidebar_logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="" />
        
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

        <br/>
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr/>

        {playlists?.categories?.items?.map(playlist=>(
            <SidebarOption title={playlist.name} />
        ))}
        {/* <SidebarOption title="Hip hop" />
        <SidebarOption title="Rock" />
        <SidebarOption title="Rnb" /> */}
        </div>
    )
}

export default Sidebar
