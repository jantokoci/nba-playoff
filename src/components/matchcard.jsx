import "../styles/matchcard.css"
import logoData from "../assets/logo-data.js"
import { useNavigate } from "react-router"






function MatchCard({game}){
        const navigate = useNavigate();

        const homePoints = game.scores.home.points
        const visitorPoints = game.scores.visitors.points
        const homeName = game.teams.home.name;
        const visitorName = game.teams.visitors.name;
        const homeCode = game.teams.home.code;
        const visitorCode = game.teams.visitors.code;

    const handleMatchClick = () => {
        navigate('/match', { state: { game } });
    }



    return(
        <>
            <div onClick={handleMatchClick}
                  className="card">
                <div className="card-home">
                    {logoData.map(item => (item.code === homeCode) ? (<img src={item.src} key={item.code} className="card-image" alt="logo"/>) : null )}
                    <h2 className='card-title'>{homeName}({homeCode})</h2>
                    <h2 className='card-text'>{homePoints}</h2>
                </div>
                <div>
                    <h2 className="card-vs">VS</h2>
                </div>
                <div className="card-visitor">
                    {logoData.map(item => (item.code === visitorCode) ? (<img src={item.src} key={item.code} className="card-image" alt="logo" />) : null )}
                    <h2 className='card-title'>{visitorName}({visitorCode})</h2>
                    <h2 className='card-text'>{visitorPoints}</h2>
                </div>
            </div>
        </>
    )
}

export default MatchCard;