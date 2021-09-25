import React from 'react'
import "./sidebar.css";
import {SidebarData} from './SidebarData'

function Sidebar() {
    return (
           <div className="side-bar">
                <ul className="SidebarList">
                {SidebarData.map((val,key) =>{
                    return <li key={key} 
                    className="row"
                    id= {window.location.pathname == val.link ? "active" : ""}
                    onClick={()=>{window.location.pathname = val.link;}} > 
                    
                    <div>{val.icon}</div>
                    <div className="tittle">{val.title}</div>
                     </li>
                })}
                </ul>
            </div>
        
    )
}

export default Sidebar
