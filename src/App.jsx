
import Home from "./pages/home.jsx"
import {Routes, Route, BrowserRouter} from "react-router";
import MatchPage from "./pages/matchpage.jsx";
import PlayerPage from "./pages/playerpage.jsx";



function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/match" element={<MatchPage/>}/>
                <Route path="/player" element={<PlayerPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
