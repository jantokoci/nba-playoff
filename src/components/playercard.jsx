import "../styles/playercard.css"
import playerImage from "../assets/nba_players.js";

function PlayerCard({player}){
    const {playerName, age, position, team, games} = player;

    return (
        <>
            <div className="player-card-container">
            <div className="card">
                <div>
                    {playerImage.map(item => (item.name === playerName) ? (<img key={item.url} src={item.image} className="card-image" alt="avatar" />) : null)}
                    <p className="card-title">{playerName}</p>
                    <p className={"card-text"}>age: {age}</p>
                </div>
                <div className="card-info">
                    <p className={"card-text"}>position: {position}</p>
                    <p className={"card-text"}>team: {team}</p>
                    <p className={"card-text"}>games in this season: {games}</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default PlayerCard;