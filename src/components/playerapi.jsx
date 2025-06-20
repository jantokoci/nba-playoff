import {useEffect, useState} from "react";
import "../styles/search.css";
import PlayerCard from "./playercard.jsx";


function PlayerFinder({name, season}) {
    const [loading, setLoading] = useState(false);
    const [playerData, setPlayerData] = useState(null);


    useEffect(() => {
        const fetchPlayerData = async () => {
            const url = `http://rest.nbaapi.com/api/PlayerDataTotals/query?playerName=${name}&season=${season}&sortBy=PlayerName&ascending=true&pageNumber=1&pageSize=10`;


            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setPlayerData(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchPlayerData()
        },[name, season])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <div className="player-cards-container">
            {playerData && playerData.length  > 0 ? (
                <div>{playerData.map((playerer) => (<PlayerCard key={playerer.id} player={playerer}/>))}</div>) : (<div>No player found</div>)}
        </div>
    );
}
export default PlayerFinder;
