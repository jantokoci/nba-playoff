import GetMatchByDate from "./getmatchbydate.jsx";
import Tabs from "./tab.jsx";
import PlayerFinder from "./playerapi.jsx";

function MultiTab() {

    const tabs = [
        {
            label: 'Game By Date',
            content: <GetMatchByDate />
        },
        {
            label: 'Search Player',
            content: <PlayerFinder />
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}

export default MultiTab;