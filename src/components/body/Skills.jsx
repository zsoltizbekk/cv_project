import React, {useState} from "react";

const editLogo = require('../../assets/edit.png');
const deleteLogo = require('../../assets/delete.png');

const Skills = (props) => {
    const [editable, setEditable] = useState (false);
    const [edit, setEdit] = useState (false);
    const [skillCopy, setSkillCopy] = useState (props.skill);
    const [skill, setSkill] = useState("");

    const toggleSkillEditOn = () => setEditable(true);
    const toggleSkillEditOff = () => setEditable(false);
    const toggleEdit = () => setEdit(!edit)

    const saveSkill = (e) => setSkill(e.target.value)

    const sendSkill = () => {
        props.setSkill(skill);
        setSkill("");
        toggleEdit();
    }

    const displayInput = () => {
        return (<div><input className="skillInput h3input" value={skill} onKeyDown={(e) => {if (e.keyCode === 13) sendSkill()}} onChange={saveSkill} type="text"/><button className="skillAddBtn" onClick={() => sendSkill()}>Add</button></div>);
    }

    const displaySkill = () => {
        return props.skill.map((e, index) =>(
            <li key={index}>{e}</li>
        ))
    }

    const displaySkillWithDeleteBtn = () => {
        return props.skill.map((e, index) =>(
            <li key={index}>{e}<button className="deleteSkillBtn" onClick={()=>deleteSkill(index)}><img className="h3EditLogo" src={deleteLogo}/></button></li>
        ))
    }

    const displayEdit = () => {
        return (<div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={toggleEdit}><img className="h2EditLogo"src={editLogo}/></button></div>) 
    }

    const deleteSkill = (delIndex) => {
        let temp = props.skill.filter((skill, i) =>i !== delIndex);
        setSkillCopy(temp)
        props.deleteSkill(temp);
    }

    return (
        <div className="skillDiv" onMouseEnter={toggleSkillEditOn} onMouseLeave={toggleSkillEditOff}>
            {editable ? <div className="skillTitleDiv h2Underline"><h2>Skill Highlights</h2>{displayEdit()}</div> :<div className="skillTitleDiv h2Underline"><h2>Skill Highlights</h2></div>}
            
            {editable ? displaySkillWithDeleteBtn() : displaySkill()}
            {edit && displayInput()}     
        </div>
    )
}

export default Skills;