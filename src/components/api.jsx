import {useEffect, useState} from 'react';
import MatchCard from "./matchcard.jsx";

function NbaApiCall({date}) {
    const [gamesData, setGamesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNbaData = async () => {
            const url = `https://api-nba-v1.p.rapidapi.com/games?date=${date}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
                    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
                }
            };

            try {
                setLoading(true);
                const response = await fetch(url, options);
                const result = await response.json();
                setGamesData(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch NBA data');
                setLoading(false);
            }
        };

        fetchNbaData();
    }, [date]);

    if (loading) return <div>Loading NBA data...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {gamesData && gamesData.response && gamesData.response.length > 0 ? (
                <div>{gamesData.response.map((game) => (<MatchCard key={game.id} game={game}/>))}</div>) : (<div>No games found</div>)}
        </div>
    );
}

export default NbaApiCall;