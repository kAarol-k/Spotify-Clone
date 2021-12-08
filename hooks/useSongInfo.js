import { useSession } from "next-auth/react";
import { useEffect, useState} from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "./useSpotify";

function useSongInfo() {
    const spotifyApi = useSpotify();
    const {data: session, status} = useSession();
    const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState)
    const [songInfo, setSongInfo] = useState(null)

    useEffect(()=>{
        const fetchSongInfo = async () =>{
            if (currentTrackId){
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentTrackId}`,
                    {
                        headers:{
                            Authorization:`Bearer ${spotifyApi.getAccessToken()}`,

                        }
                    }
                ).then (res=>res.json());

                setSongInfo(trackInfo);
            }
        }
        fetchSongInfo()
    },[currentTrackId, spotifyApi])

    return songInfo;
}

export default useSongInfo
