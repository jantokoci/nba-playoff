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
    const two = player.twoFg;
    const twoA = player.twoAttempts;
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




    const rpg = (offRb+defRb)/games;
    const apg = assist/games;
    const stpg = steals/games;
    const bpg = blocks/games;

    const points = two+three;
    const ppg = points/games;
    const att = twoA+threeA;



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
                    <div className="player-page-stats">
                        <h2>Player Statistics</h2>
                        <table className="stats-table">
                            <thead>
                            <tr>
                                <th>Categories</th>
                                <th>Season Total</th>
                                <th>Average Per Game</th>
                                <th>Percentage</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Points</td>
                                <td>{points}</td>
                                <td>{ppg.toFixed(2)} PPG</td>
                                <td>{((points/att).toFixed(2))*100}%</td>
                            </tr>
                            <tr>
                                <td>Two Pointers</td>
                                <td>{two}</td>
                                <td>-</td>
                                <td>{100*((two/twoA).toFixed(1))}%</td>
                            </tr>
                            <tr>
                                <td>Three Pointers</td>
                                <td>{three}</td>
                                <td>-</td>
                                <td>{100*((three/threeA).toFixed(2))}%</td>
                            </tr>
                            <tr>
                                <td>Free Throws</td>
                                <td>{ft}</td>
                                <td>-</td>
                                <td>{100*((ft/ftA).toFixed(2))}%</td>
                            </tr>
                            <tr>
                                <td>Rebounds</td>
                                <td>{offRb+defRb}</td>
                                <td>{rpg.toFixed(2)} RPG</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Assists</td>
                                <td>{assist}</td>
                                <td>{apg.toFixed(2)} APG</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Setals</td>
                                <td>{steals}</td>
                                <td>{stpg.toFixed(2)} SPG</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Blocks</td>
                                <td>{blocks}</td>
                                <td>{bpg.toFixed(2)} BPG</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Minutes</td>
                                <td>{minutesTotal}</td>
                                <td>{(minutesTotal/games).toFixed(1)} MINUTES</td>
                                <td>-</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    );
}