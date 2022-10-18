import React, {useState} from "react";

const editLogo = require('../../assets/edit.png');

const Summary = (props) => {
    const [editable, setEditable] = useState (false);
    const [edit, setEdit] = useState (false);
    const [summaryCopy, setSummaryCopy] = useState (props.summary);

    const toggleSummaryEditOn = () => setEditable(true);
    const toggleSummaryEditOff = () => setEditable(false);
    const toggleEdit = () => setEdit(!edit)
    const saveSummary = (e) => setSummaryCopy(e.target.value)
    const sendSummary = () => {
        props.setSummary(summaryCopy);
        toggleEdit();
    }

    const displayInput = () => {
        return (<div><textarea className="summaryInput h3input" onKeyDown={(e) => {if (e.keyCode === 13) sendSummary()}} onChange={saveSummary} value={summaryCopy}/></div>);
    }

    const displaySummary = () => {
        return (<div className="summaryContentDiv"><h3>{props.summary}</h3></div>) 
    }

    const displayEdit = () => {
        return (<div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={toggleEdit}><img className="h2EditLogo"src={editLogo}/></button></div>) 
    }
    
    return (
        <div className="summaryDiv" onMouseEnter={toggleSummaryEditOn} onMouseLeave={toggleSummaryEditOff}>
            {editable ? <div className="summaryTitleDiv h2Underline"><h2>Summary</h2>{displayEdit()}</div> :<div className="summaryTitleDiv h2Underline"><h2>Summary</h2></div>}
            {edit ? displayInput() : displaySummary()}
        </div>
    )
}

export default Summary;