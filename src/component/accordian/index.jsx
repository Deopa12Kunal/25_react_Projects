//single selection
// multiple selection
import data from "./data";
import { useState } from "react";
 import './style.css';
export default function Accordian(){
    const [expanded, setExpanded] = useState(null);
    function handleSingleSection(getCurrentId){
setExpanded(getCurrentId === expanded ? null : getCurrentId);
console.log(expanded);
    }
    return<div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ?(
                    data.map((dataItem)=>(
                        <div className="item">
                            <div onClick={()=>handleSingleSection(dataItem.id)}className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                                </div>
                                {
                                     expanded === dataItem.id ?
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                    :null
                                }
                                </div>
                            
                    ))
                 ) : (
                 <div>No data found ! </div>
            )}
        </div>
    </div>;
}