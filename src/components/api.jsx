import {useEffect, useState} from 'react';

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
                const result = await response.json(); // Using json() instead of text() for structured data
                setGamesData(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch NBA data');
                setLoading(false);
            }
        };

        fetchNbaData();
    }, []);

    if (loading) return <div>Loading NBA data...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <pre>{JSON.stringify(gamesData, null, 2)}</pre>
        </div>
    );
}

export default NbaApiCall;