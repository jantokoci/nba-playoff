import {useEffect, useState} from "react";

function PlayerFinder() {
    const [player, setPlayer] = useState('');
    const [loading, setLoading] = useState(false);
    const [playerData, setPlayerData] = useState(null);

    async function fetchPlayerData() {
        try {
            setLoading(true);
            const response = await fetch(`http://rest.nbaapi.com/api/PlayerDataTotals/query?playerName=${player}&season=2025&sortBy=PlayerName&ascending=true&pageNumber=1&pageSize=10`);
            const data = await response.json();

            if(data){
                setLoading(false);
                setPlayerData(data);
                setPlayer('');
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    function handleSubmit() {
        fetchPlayerData();
    }

    useEffect(() => {
        fetchPlayerData()
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input name="search" type="text" placeholder="Search for a GitHub user" value={player} onChange={(e) => setPlayer(e.target.value)}/>
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                playerData !== null ? console.log(playerData) : <p>no data</p>
            }
        </div>
    );
}
export default PlayerFinder;
