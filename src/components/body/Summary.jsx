import React from "react";

const editLogo = require('../../assets/edit.png');

class Summary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editable : false,
            edit : false,
            summaryCopy : this.props.summary,
        }
    }

    toggleSummaryEditOn = () => {
        this.setState(state => ({
            ...state,
            editable : true,
        }));
    }

    toggleSummaryEditOff = () => {
        this.setState(state => ({
            ...state,
            editable : false,
        }));
    }


    toggleEdit = () => {
        this.setState(state => ({
            ...state,
            edit : !state.edit,
        }))
    }

    saveSummary = (e) => {
        this.setState(state => ({
            ...state,
            summaryCopy : e.target.value
        }))
    }

    setSummary = () => {
        this.props.setSummary(this.state.summaryCopy);
        this.toggleEdit();
    }

    displayInput = () => {
        return (<div><textarea className="summaryInput h3input" onKeyDown={(e) => {if (e.keyCode === 13) this.setSummary()}} onChange={this.saveSummary} value={this.state.summaryCopy}/></div>);
    }

    displaySummary = () => {
        return (<div className="summaryContentDiv"><h3>{this.props.summary}</h3></div>) 
    }

    displayEdit = () => {
        return (<div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={this.toggleEdit}><img className="h2EditLogo"src={editLogo}/></button></div>) 
    }
    
    render (){
        return (
        <div className="summaryDiv" onMouseEnter={this.toggleSummaryEditOn} onMouseLeave={this.toggleSummaryEditOff}>
            {this.state.editable ? <div className="summaryTitleDiv h2Underline"><h2>Summary</h2>{this.displayEdit()}</div> :<div className="summaryTitleDiv h2Underline"><h2>Summary</h2></div>}
            {this.state.edit ? this.displayInput() : this.displaySummary()}
        </div>
        )
    }
}

export default Summary;