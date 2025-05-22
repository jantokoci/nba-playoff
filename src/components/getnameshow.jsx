import {useState} from "react";
import PlayerFinder from "./playerapi.jsx";


function GetName(){

    const [show, setShow] = useState(false);
    const [name, setPlayer] = useState("");
    const [season, setSeason] = useState("2025");

    function handleSubmit(){
        setShow(!show);
        setPlayer(document.getElementById("name").value);
        setSeason(document.getElementById("season").value);
    }

    console.log(name)

    return(
        <>
        <div className="input-wrapper">
            <input className="searchbar" id="name" name="search" type="text" placeholder="Search for an NBA Player"/>
            <button className="searchbutton" onClick={handleSubmit}>Search</button>
            <select id="season" name="Season" className="season-select">
                <option value="2025" selected>2025</option>
                <option value="2024">2024</option>
                <option value="2023" >2023</option>
                <option value="2022">2022</option>
            </select>
        </div>
        <div className="helohelo">
            {show && <PlayerFinder name={name} season={season}/>}
        </div>
        </>
    );
}

export default GetName;