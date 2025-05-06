import {useState} from "react";
import PlayerFinder from "./playerapi.jsx";


function GetName(){

    const [show, setShow] = useState(false);
    const [name, setPlayer] = useState("");

    function handleSubmit(){
        setShow(true);
        setPlayer(document.getElementById("name").value);
        //setPlayer("");
    }

    console.log(name)

    return(
        <>
        <div className="input-wrapper">
            <input className="searchbar" id="name" name="search" type="text" placeholder="Search for an NBA Player"/>
            <button className="searchbutton" onClick={handleSubmit}>Search</button>
        </div>
        <div>
            {show && <PlayerFinder name={name} />}
        </div>
        </>
    );
}

export default GetName;