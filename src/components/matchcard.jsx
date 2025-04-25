function MatchCard({game}){
    return(
        <>
            <div>
                <h1>{game.teams.home.name} vs {game.teams.visitors.name}</h1>
            </div>
        </>
    )
}

export default MatchCard;