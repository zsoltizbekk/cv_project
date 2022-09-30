import React from "react";
import moment from 'moment';

const editLogo = require('../../assets/edit.png');
const addLogo = require('../../assets/add.png');
const deleteLogo = require('../../assets/delete.png');

class Experience extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            edit : false,
            editable : false,
            from : "",
            to: "",
            work: "",
            tasks : [],
            taskTemp : "",
            tempExp : this.props.experience,
        }
    }
    
    toggleEditableOn = () => {
        this.setState(state =>({
            ...state,
            editable : true,
        }))
    }

    toggleEditableOff = () => {
        this.setState(state =>({
            ...state,
            editable : false,
        }))
    }
    
    toggleEdit = () => {
        this.setState(state =>({
            ...state,
            edit : !state.edit
        }));
    }
    
    displayExperience = () => {
        return (
            this.props.experience.map((exp, index) => (
                (<div className="experienceListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{exp.from} - {exp.to}</h3>
                    <h3 style={{fontFamily: "myfont_regular"}}>{exp.work}</h3>
                    <ul>{exp.tasks.map((tasks, i) => (
                        <li key={i}>{tasks}</li>
                    ))}
                    </ul>
                </div>)
            )));
    }

    displayExperienceWithDeleteBtn = () => {
        return (
            this.props.experience.map((exp, index) => (
                (<div className="experienceListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{exp.from} - {exp.to}</h3>
                    <h3 style={{fontFamily: "myfont_regular"}}>{exp.work}</h3>
                    <ul>{exp.tasks.map((tasks, i) => (
                        <li key={i}>{tasks}</li>
                    ))}
                    </ul>
                    <button className="deleteExpBtn" onClick={()=>{this.deleteExp(index)}}><img className="h3EditLogo" src={deleteLogo}/></button>
                </div>)
            )));
    }

    dispalyInputField = () => {
        return (
            <div className="experienceInputFieldDiv">
                <h2>Add new experience:</h2>
                <h3>From:</h3>
                <input className="h3input" onChange={this.saveFrom} type="date" />
                <h3>To:</h3>
                <input className="h3input" onChange={this.saveTo} type="date" />
                <h3>Company name:</h3>
                <input className="h3input" onChange={this.saveWork} type="text" />
                <ul>{this.state.tasks.map((tasks, i) => (
                       <div className="expInputListDiv" key={i}><li>{tasks}</li><button className="deleteSkillBtn" onClick={()=>{this.deleteTask(i)}}><img className="h3EditLogo" src={deleteLogo}/></button></div>
                    ))}
                    <li><input value={this.state.taskTemp} className="h3input expTaskInput" onChange={this.saveTask} onKeyDown={(e) => {if (e.keyCode === 13) this.setTask()}} type="text" /><button className="skillAddBtn" onClick={()=>{this.setTask()}}>Add</button></li>
                </ul>         
                <button className="expAddBtn" onClick={() => this.setExperience()}>Add</button>
            </div>
        );
    }

    saveFrom = (e) => {
        const newDate = new Date(e.target.value); 
        const newDateString = moment(newDate).format("YYYY-MM-DD");
        console.log(newDateString)
        this.setState(state =>({
            ...state,
            from : newDateString
        }));
        console.log(this.state.from)
    }
    
    saveTo = (e) => { 
        const newDate = new Date(e.target.value);
        const newDateString = moment(newDate).format("YYYY-MM-DD");
        console.log(typeof newDateString)
        this.setState(state =>({
            ...state,
            to : newDateString
        }));
    }

    saveWork = (e) => {
        this.setState(state => ({
            ...state,
            work : e.target.value,
        }));
    }

    saveTask = (e) => {
        this.setState(state => ({
            ...state,
            taskTemp : e.target.value
        }));
    }

    setTask = () => {
        let temp = this.state.tasks;
        temp.push(this.state.taskTemp);
        this.setState(state => ({
            ...state,
            taskTemp : "",
            tasks : temp,
        }));
    }

    setExperience = () => {
        console.log(this.state.from)
        this.props.setExperience([
            this.state.from,
            this.state.to,
            this.state.work,
            this.state.tasks]);
        this.setState({
            edit : false,
            editable : false,
            from : "",
            to: "",
            work: "",
            tasks : [],
            taskTemp : "",
            tempExp : this.props.experience,
        });
    }

    deleteTask = (i) => {
        console.log(i)
        let temp = this.state.tasks.filter((task, index) => i!==index);
        console.log(temp)
        this.setState(state =>({
            ...state,
            tasks : temp
        }));
    }

    deleteExp = (i) => {
        let temp = this.state.tempExp.filter((exp, index) => i!==index);
        this.setState(state => ({
            ...state,
            tempExp : temp,
        }));
        console.log(temp)
        this.props.deleteExperience(temp);
    }

    render (){
        return (
        <div className="experienceDiv" onMouseEnter={this.toggleEditableOn} onMouseLeave={this.toggleEditableOff}>
            {this.state.editable ? <div className="experienceTitleDiv h2Underline"><h2>Experience</h2><div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={this.toggleEdit}><img className="h2EditLogo" src={editLogo}/></button></div></div> : <div className="experienceTitleDiv h2Underline"><h2>Experience</h2></div>}
            {this.state.edit ? <div className="experiencesDiv">{this.displayExperienceWithDeleteBtn()}</div> : <div className="experiencesDiv">{this.displayExperience()}</div>}
            {this.state.edit ? this.dispalyInputField() : null}
        </div>
        )
    }
}

export default Experience;