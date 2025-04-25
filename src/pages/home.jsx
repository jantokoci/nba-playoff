import {useState} from "react";
import NbaApiCall from "../components/api.jsx";

function Home(){
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const today = new Date(year, month, day);

    const [date, setDate] = useState(today);
    const [show, setShow] = useState(false);

    function handleDateGet(event){
        setDate(event.target.value);
    }

    function handleDateSet(){
        console.log(date);
        setShow(true);
    }


    return(
        <>
            <div>
                <h1>Search For an NBA Match by Date</h1>
            </div>
            <div>
                <input onChange={handleDateGet} type="date" min='2000-01-01' />
                <button onClick={handleDateSet}>Get Match</button>
            </div>
            <div>
                {show && <NbaApiCall date={date}/>}
            </div>
        </>
    )
}

export default Home