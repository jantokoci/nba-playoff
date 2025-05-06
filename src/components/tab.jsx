import {useState} from "react";
import "../styles/tabs.css";

function Tabs({tabsContent, onChange}) {

    const [currentTab, setCurrentTab] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTab(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
        <div className="wrapper">
            <div className="heading">
                <p className="sitename">NBA Searcher:</p>
                {
                    tabsContent.map((item, index) => (
                        <div className={`tab-item ${currentTab === index ? 'active' : ''}`}
                             onClick={() => handleOnClick(index)}
                             key={item.label}><span
                            className="label">{item.label}</span></div>))
                }
            </div>
            <div className="content" style={{color: 'red'}}>
                {
                    tabsContent[currentTab] && tabsContent[currentTab].content
                }
            </div>
        </div>
    )
}

export default Tabs;