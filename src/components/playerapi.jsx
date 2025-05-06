import {useEffect, useState} from "react";
import "../styles/search.css";

function PlayerFinder() {
    const [player, setPlayer] = useState('');
    const [loading, setLoading] = useState(false);
    const [playerData, setPlayerData] = useState(null);
    const [click, setClick] = useState(false);

    // async function fetchPlayerData() {
    //     try {
    //         setLoading(true);
    //         const response = await fetch(`http://rest.nbaapi.com/api/PlayerDataTotals/query?playerName=${player}&season=2025&sortBy=PlayerName&ascending=true&pageNumber=1&pageSize=10`);
    //         const data = await response.json();
    //
    //         if(data){
    //             setLoading(false);
    //             setPlayerData(data);
    //             setPlayer('');
    //         }
    //     } catch (error) {
    //         setLoading(false);
    //         console.log(error);
    //     }
    // }

    function handleSubmit() {
        // fetchPlayerData();
        setClick(!click);
    }

    useEffect(() => {
        const fetchPlayerData = async () => {
            const url = `http://rest.nbaapi.com/api/PlayerDataTotals/query?playerName=${player}&season=2025&sortBy=PlayerName&ascending=true&pageNumber=1&pageSize=10`;


            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setPlayerData(result);
                setPlayer('');
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchPlayerData()
        },[click])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <div>
            <div className="input-wrapper">
                <input className="searchbar" name="search" type="text" placeholder="Search for an NBA Player" value={player} onChange={(e) => setPlayer(e.target.value)}/>
                <button className="searchbutton" onClick={handleSubmit}>Search</button>
            </div>
            {
                playerData !== null ? console.log(playerData) : <p>no data</p>
            }
        </div>
    );
}
export default PlayerFinder;
