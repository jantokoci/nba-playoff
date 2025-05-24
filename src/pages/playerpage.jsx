import {useLocation, useNavigate} from "react-router-dom";
import playerImage from "../assets/nba_players.js";
import logoData from "../assets/logo-data.js";
import "../styles/playerpage.css";

export default function PlayerPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const player = location.state?.player;

    if (!player) {
        return (
            <>
                <div className="no-player-container">
                    <h2>No Player Data Available</h2>
                    <button onClick={() => navigate('/')}>Back</button>
                </div>
            </>
        );
    }

    const name = player.playerName;
    const age = player.age;
    const games = player.games;
    const minutesTotal = player.minutesPg;
    const two = player.twoAttempts;
    const twoA = player.twoAt;
    const three = player.threeFg;
    const threeA = player.threeAttempts;
    const ft = player.ft;
    const ftA = player.ftAttempts;
    const offRb = player.offensiveRb;
    const defRb = player.defensiveRb
    const assist = player.assists;
    const steals = player.steals
    const blocks = player.blocks
    const team = player.team;

    return(
        <>
            <div>
                <div className="player-page-header">
                    <div className="player-page-picture">
                        {playerImage.map(item => (item.name === name) ? (<img key={item.url} src={item.image} className="player-picture" alt="avatar" />) : null)}
                    </div>
                    <div className="player-page-picture">
                        {logoData.map(item => (item.code === team) ? (<img src={item.src} key={item.code} className="card-image" alt="logo"/>) : null )}
                    </div>
                    <div className="player-page-basics">
                        <h1>{name}</h1>
                        <p>Age: {age}</p>
                        <p>Games: {games}</p>
                    </div>
                </div>
            </div>
        </>
    );
}