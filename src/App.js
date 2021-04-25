import './App.css';
import Login from './Login'
import React , {useEffect , useState} from 'react';
import {getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
// const [token , setToken]  = useState(null);
const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
      if(_token){

          dispatch({
            type : "SET_TOKEN",
            token : _token
          })

        spotify.setAccessToken(_token);

        spotify.getMe().then((user) =>{
         
          dispatch({
            type: "SET_USER",
            user:user
          });
        });

        spotify.getCategories( {limit:100}).then((playlists) => {
          // console.log(playlists)
          dispatch({
            type:'SET_PLAYLISTS',
            playlists:playlists
          })
        })

        spotify.getPlaylist('37i9dQZEVXbLZ52XmnySJg').then(response => {
          // console.log(response.images[0].url)
          dispatch({
              type: 'SET_DISCOVER_WEEKLY',
              discover_weekly: response
  
          })
        })

      }

    // console.log("i hv token",token);
   }, []);

      // console.log("USer Info: ", user);
      // console.log("token Info: ", token);

  return (
    <div className="App">
      {
        token ? (
         <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
   
     
    </div>
  );
}

export default App;
