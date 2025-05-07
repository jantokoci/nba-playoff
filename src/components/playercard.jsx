import "../styles/playercard.css"

function PlayerCard({player}){


    return (
        <>
            <div className="card">
                <div>
                    <p className="card-title">{player.playerName}</p>
                    <p className={"card-text"}>age: {player.age}</p>
                </div>
                <div>
                    <p className={"card-text"}>team: {player.team}</p>
                    <p className={"card-text"}>games in this season: {player.games}</p>
                </div>
            </div>
        </>
    )
}

export default PlayerCard;