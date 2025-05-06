import {useState} from "react";
import NbaApiCall from "../components/api.jsx";
import "../styles/getmatch.css"

function GetMatchByDate(){
    const today = new Date().toISOString().slice(0, 10);


    const [date, setDate] = useState(today);
    const [show, setShow] = useState(false);


    function handleDateSet(){
        const matchDate = document.getElementById("match_date").value;
        setDate(matchDate);
        setShow(true);
    }
    return(
        <><div className="home-page-container">
            </div>
            <div className="home-container">
                <input className="home-date" id="match_date" type="date" min='2000-01-01' max={today} defaultValue={today} />
                <button className="home-button" onClick={handleDateSet}>Get Match</button>
            </div>
            <div>
                {show && <NbaApiCall date={date}/>}
            </div>
        </>
    )
}

export default GetMatchByDate;
