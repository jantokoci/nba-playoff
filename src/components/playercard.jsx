import "../styles/playercard.css"
import playerImage from "../assets/nba_players.js";
import {useNavigate} from "react-router";

function PlayerCard({player}){
    const {playerName, age, position, team, games} = player;

    const navigate = useNavigate();

    const handlePlayerClick = () => {
        navigate('/player', { state: { player } });
    }


    return (
        <>

                <div className="player-card" onClick={handlePlayerClick}>
                    <div className="player-card-header">
                        {playerImage.map(item => (item.name === playerName) ? (<img key={item.url} src={item.image} className="player-card-image
" alt="avatar" />) : null)}
                        <div>
                            <h3 className="player-card-name">{playerName}</h3>
                            <p className="player-card-team">{team}</p>
                            <span className="player-card-position">{position}</span>
                        </div>
                    </div>

                    <div className="player-card-stats">
                        <div className="stat-item">
                            <p className="stat-value">{age}</p>
                            <p className="stat-label">AGE</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-value">{games}</p>
                            <p className="stat-label">GAMES</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default PlayerCard;