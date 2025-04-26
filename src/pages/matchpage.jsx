import { useLocation, useNavigate } from "react-router";
import logoData from "../assets/logo-data.js";
import "../styles/matchpage.css";

function MatchPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const game = location.state?.game;

    if (!game) {
        return (
            <div className="no-match-container">
                <h2>No match available</h2>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
        );
    }

    const homeTeam = game.teams.home;
    const visitorTeam = game.teams.visitors;
    const homeScore = game.scores.home;
    const visitorScore = game.scores.visitors;
    const gameDate = new Date(game.date.start).toLocaleDateString('en-US');
    const gameTime = new Date(game.date.start).toLocaleTimeString('en-US');
    const arena = game.arena;
    const homeLogo = logoData.find(item => item.code === homeTeam.code)?.src;
    const visitorLogo = logoData.find(item => item.code === visitorTeam.code)?.src;



    return (
        <div className="match-page-container">
            <button className="back-button" onClick={() => navigate('/')}>Back</button>
            
            <div className="match-header">
                <h1>Match Details</h1>
                <div className="match-date-time">
                    <p>{gameDate} | {gameTime}</p>
                    <p>{arena?.name}, {arena?.city}, {arena?.state}</p>
                </div>
            </div>
            
            <div className="teams-container">
                <div className="team home-team">
                    <img src={homeLogo} alt={homeTeam.name} className="team-logo" />
                    <h2>{homeTeam.name}</h2>
                    <p className="team-score">{homeScore.points}</p>
                </div>
                
                <div className="vs-container">
                    <h2>VS</h2>
                </div>
                
                <div className="team visitor-team">
                    <img src={visitorLogo} alt={visitorTeam.name} className="team-logo" />
                    <h2>{visitorTeam.name}</h2>
                    <p className="team-score">{visitorScore.points}</p>
                </div>
            </div>
            
            <div className="match-details">
                <h3>Quarters</h3>
                <div className="quarters">
                    <div className="quarter-header">
                        <span>Team</span>
                        <span>1. quarter</span>
                        <span>2. quarter</span>
                        <span>3. quarter</span>
                        <span>4. quarter</span>
                        {game.scores.home.linescore.length > 4 && <span>Overtime</span>}
                        <span>All</span>
                    </div>
                    
                    <div className="quarter-row">
                        <span>{homeTeam.name}</span>
                        {homeScore.linescore.map((score, index) => (
                            <span key={index}>{score}</span>
                        ))}
                        <span>{homeScore.points}</span>
                    </div>
                    
                    <div className="quarter-row">
                        <span>{visitorTeam.name}</span>
                        {visitorScore.linescore.map((score, index) => (
                            <span key={index}>{score}</span>
                        ))}
                        <span>{visitorScore.points}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchPage;