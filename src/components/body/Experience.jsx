import React, {useState} from "react";
import moment from 'moment';

const editLogo = require('../../assets/edit.png');
const addLogo = require('../../assets/add.png');
const deleteLogo = require('../../assets/delete.png');

const Experience = (props) => {
    const [edit, setEdit] = useState (false);
    const [editable, setEditable] = useState (false);
    const [from, setFrom] = useState ("");
    const [to, setTo] = useState ("");
    const [work, setWork] = useState ("");
    const [tasks, setTasks] = useState ([]);
    const [taskTemp, setTaskTemp] = useState("");
    const [tempExp, setTempExp] = useState(props.experience);
    
    const toggleEditableOn = () => setEditable(true);
    const toggleEditableOff = () => setEditable(false);
    const toggleEdit = () => setEdit(!edit);
    
    const displayExperience = () => {
        return (
            props.experience.map((exp, index) => (
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

    const displayExperienceWithDeleteBtn = () => {
        return (
            props.experience.map((exp, index) => (
                (<div className="experienceListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{exp.from} - {exp.to}</h3>
                    <h3 style={{fontFamily: "myfont_regular"}}>{exp.work}</h3>
                    <ul>{exp.tasks.map((tasks, i) => (
                        <li key={i}>{tasks}</li>
                    ))}
                    </ul>
                    <button className="deleteExpBtn" onClick={()=>{deleteExp(index)}}><img className="h3EditLogo" src={deleteLogo}/></button>
                </div>)
        )));
    }

    const dispalyInputField = () => {
        return (
            <div className="experienceInputFieldDiv">
                <h2>Add new experience:</h2>
                <h3>From:</h3>
                <input className="h3input" onChange={saveFrom} type="date" />
                <h3>To:</h3>
                <input className="h3input" onChange={saveTo} type="date" />
                <h3>Company name:</h3>
                <input className="h3input" onChange={saveWork} type="text" />
                <ul>{tasks.map((tasks, i) => (
                       <div className="expInputListDiv" key={i}><li>{tasks}</li><button className="deleteSkillBtn" onClick={()=>{deleteTask(i)}}><img className="h3EditLogo" src={deleteLogo}/></button></div>
                    ))}
                    <li><input value={taskTemp} className="h3input expTaskInput" onChange={saveTask} onKeyDown={(e) => {if (e.keyCode === 13) sendTask()}} type="text" /><button className="skillAddBtn" onClick={()=>{sendTask()}}>Add</button></li>
                </ul>         
                <button className="expAddBtn" onClick={() => sendExperience()}>Add</button>
            </div>
        );
    }

    const saveFrom = (e) => {
        const newDate = new Date(e.target.value); 
        const newDateString = moment(newDate).format("YYYY-MM-DD");
        setFrom(newDateString);
    }
    
    const saveTo = (e) => { 
        const newDate = new Date(e.target.value);
        const newDateString = moment(newDate).format("YYYY-MM-DD");
        setTo(newDateString);
    }

    const saveWork = (e) => setWork(e.target.value)
    const saveTask = (e) => setTaskTemp(e.target.value)

    const sendTask = () => {
        let temp = tasks;
        temp.push(taskTemp);
        setTaskTemp("");
        setTasks(temp);
    }

    const sendExperience = () => {
        props.setExperience([
            from,
            to,
            work,
            tasks]);

        setEdit(false);
        setEditable(false);
        setFrom("");
        setTo("");
        setWork("");
        setTasks([]);
        setTaskTemp("");
        setTempExp(props.experience);
    }

    const deleteTask = (i) => {
        let temp = tasks.filter((task, index) => i!==index);
        setTasks(temp);
    }

    const deleteExp = (i) => {
        let temp = tempExp.filter((exp, index) => i!==index);
        setTempExp(temp);
        props.deleteExperience(temp);
    }

    return (
        <div className="experienceDiv" onMouseEnter={toggleEditableOn} onMouseLeave={toggleEditableOff}>
            {editable ? <div className="experienceTitleDiv h2Underline"><h2>Experience</h2><div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={toggleEdit}><img className="h2EditLogo" src={editLogo}/></button></div></div> : <div className="experienceTitleDiv h2Underline"><h2>Experience</h2></div>}
            {edit ? <div className="experiencesDiv">{displayExperienceWithDeleteBtn()}</div> : <div className="experiencesDiv">{displayExperience()}</div>}
            {edit ? dispalyInputField() : null}
        </div>
    )
}

export default Experience;