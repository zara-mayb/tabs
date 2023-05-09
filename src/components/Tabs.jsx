import React, {useState} from 'react'

const Tabs = (props) => {
    const [selectedTab, setSelectedTab] = useState(props.tabs[0])
    return (
        <fieldset>
            <legend>Tabs</legend>
            {
                props.tabs.map((tab,idx) => {
                    return (
                        <button key ={idx} onClick={(e) => setSelectedTab(tab)}> {tab.label}</button>
                    )
                }
                )
            }
            <hr />
            <div>
                <p>{selectedTab.content}</p>
            </div>
        </fieldset>
    )
}

export default Tabs