import React, {useState} from "react";
import moment from 'moment';

const editLogo = require('../../assets/edit.png');
const addLogo = require('../../assets/add.png');
const deleteLogo = require('../../assets/delete.png');

const Education = (props) => {
    const [edit, setEdit] = useState (false);
    const [editable, setEditable] = useState (false);
    const [from, setFrom] = useState ("");
    const [to, setTo] = useState ("");
    const [school, setSchool] = useState ("");
    const [degree, setDegree] = useState ("");

    const toggleEditableOn = () => setEditable(true);
    const toggleEditableOff = () => setEditable(false);
    const toggleEdit = () => setEdit(!edit)
    const displayEducation = () => {
        return (
            props.education.map((edu, index) => (
                (<div className="educationListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{edu.from} - {edu.to}</h3>
                    <h3> <span style={{fontFamily: "myfont_regular"}}>{edu.school} - </span>{edu.degree}</h3>
                </div>)
            ))
        );
    }

    const displayEducationWithDeleteBtn = () => {
        return (
            props.education.map((edu, index) => (
                (<div className="educationListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{edu.from} - {edu.to}</h3>
                    <h3> <span style={{fontFamily: "myfont_regular"}}>{edu.school} - </span>{edu.degree}</h3>
                    <button className="deleteEduBtn" onClick={()=>{deleteEdu(index)}}><img className="h3EditLogo" src={deleteLogo}/></button>
                </div>)
            ))
        );
    }

    const deleteEdu = (i) => {
        let temp = props.education.filter((edu, index)=> i!==index);
        props.deleteEducation(temp);
    }
    const dispalyInputField = () => {
        return (
            <div className="educationInputFieldDiv">
                <h2>Add new education:</h2>
                <h3>From:</h3>
                <input className="h3input" onChange={saveFrom} type="date" />
                <h3>To:</h3>
                <input className="h3input" onChange={saveTo} type="date" />
                <h3>School name:</h3>
                <input className="h3input" onChange={saveSchoolName} type="text" />
                <h3>Educational level:</h3>
                <input className="h3input" onChange={saveDegree} type="text" />
                <button className="eduAddBtn" onClick={() => sendEducation()}>Add</button>
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

    const saveSchoolName = (e) => setSchool(e.target.value);
    const saveDegree = (e) => setDegree(e.target.value);

    const sendEducation = () => {
        props.setEducation([
            from, 
            to, 
            school, 
            degree]);
        toggleEdit();
    }

    return (
        <div className="educationDiv" onMouseEnter={toggleEditableOn} onMouseLeave={toggleEditableOff}>
            {editable ? <div className="educationTitleDiv h2Underline"><h2>Education</h2><div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={toggleEdit}><img className="h2EditLogo" src={editLogo}/></button></div></div> : <div className="educationTitleDiv h2Underline"><h2>Education</h2></div>}
            {edit ? <div className="educationsDiv">{displayEducationWithDeleteBtn()}</div> : <div className="educationsDiv">{displayEducation()}</div>}
            {edit ? dispalyInputField() : null}
        </div>
    )
}

export default Education;