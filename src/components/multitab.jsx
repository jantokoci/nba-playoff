import GetMatchByDate from "./getmatchbydate.jsx";
import Tabs from "./tab.jsx";
import GetName from "./getnameshow.jsx";

function MultiTab() {

    const tabs = [
        {
            label: 'Game By Date',
            content: <GetMatchByDate />
        },
        {
            label: 'Search Player',
            content: <GetName />
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}

export default MultiTab;