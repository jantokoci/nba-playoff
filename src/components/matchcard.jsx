import "../styles/matchcard.css"
import logoData from "../assets/logo-data.js"


function MatchCard({game}){
    const homepoints = game.scores.home.points
    const visitorpoints = game.scores.visitors.points
    const homename = game.teams.home.name;
    const visitorsname = game.teams.visitors.name;
    const homecode = game.teams.home.code;
    const visitorcode = game.teams.visitors.code;


    return(
        <>
            <div className="card">
                <div className="card-home">
                    {logoData.map(item => (item.code === homecode) ? (<img src={item.src} className="card-image" />) : null )}
                    <h2 className='card-title'>{homename}({homecode})</h2>
                    <h2 className='card-text'>{homepoints}</h2>
                </div>
                <div>
                    <h2 className="card-vs">vs</h2>
                </div>
                <div className="card-visitor">
                    {logoData.map(item => (item.code === visitorcode) ? (<img src={item.src} className="card-image" />) : null )}
                    <h2 className='card-title'>{visitorsname}({visitorcode})</h2>
                    <h2 className='card-text'>{visitorpoints}</h2>
                </div>
            </div>
        </>
    )
}

export default MatchCard;