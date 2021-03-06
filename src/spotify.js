
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri ="https://peaceful-torvalds-d2ec15.netlify.app/";
const clientId = "3f1cb3146bb44707a7f37f6cc341c96e";

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl =()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
                            &response_type=token&show_dialog=true`