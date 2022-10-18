import React, {useState} from "react";

const editLogo = require('../../assets/edit.png');
const addLogo = require('../../assets/add.png');
const deleteLogo = require('../../assets/delete.png');

const Certifications = (props) => {

    const [edit, setEdit] = useState(false);
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState("");
    const [skill, setSkill] = useState([]);
    const [tempSkill, setTempSkill] = useState("");

    const toggleEditableOn = () => setEditable(true);
    const toggleEditableOff = () => setEditable(false);
    const toggleEdit = () => setEdit(!edit)
    const displayCertification = () => {
        return (
            props.certification.map((cert, index) => (
                (<div className="certificationListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{cert.name}</h3>
                    <ul>{cert.skill.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                    </ul>
                </div>)
            ))
        );
    }

    const displayCertificationWithDeleteBtn = () => {
        return (
            props.certification.map((cert, index) => (
                (<div className="certificationListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{cert.name}</h3>
                    <ul>{cert.skill.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                    </ul>
                    <button className="deleteCertBtn" onClick={()=>{deleteCert(index)}}><img className="h3EditLogo" src={deleteLogo}/></button>
                </div>)
            ))
        );
    }

    const deleteCert = (i) => {
        let temp = props.certification.filter((cert, index)=> i!==index);
        props.deleteCertification(temp);
    }

    const dispalyInputField = () => {
        return (
            <div className="certificationInputFieldDiv">
                <h2>Add new certification:</h2>
                <h3>Name:</h3>
                <input className="h3input" onChange={saveName} type="text" />
                <h3>Skills:</h3>
                <ul>{skill.map((skill, index) =>(
                    <li key={index}>{skill}<button className="deleteSkillBtn" onClick={() => deleteSkill(index)}><img className="h3EditLogo" src={deleteLogo}/></button></li>
                ))}
                </ul>
                <div><input className="h3input" value={tempSkill} onChange={saveSkill} onKeyDown={(e)=>{if (e.keyCode === 13) sendSkill()}} type="text" /><button className="skillAddBtn" onClick={()=>sendSkill()}>Add</button></div>
                <button className="certAddBtn" onClick={() => setCertification()}>Add</button>
            </div>
        );
    }

    const saveName = (e) => setName(e.target.value)
    const saveSkill = (e) => setTempSkill(e.target.value)

    const sendSkill = () => {
        let temp = skill;
        temp.push(tempSkill);
        setTempSkill("");
        setSkill(temp);
    }

    const setCertification = () => {
        props.setCertification([
            name, 
            skill
        ]);
        toggleEdit();
        setSkill([])
    }

    const deleteSkill = (index) => {
        let temp = skill.filter((skill, i) => i!==index);
        setSkill(temp)
    }

    return (
        <div className="certificationDiv" onMouseEnter={toggleEditableOn} onMouseLeave={toggleEditableOff}>
            {editable ? <div className="certificationTitleDiv h2Underline"><h2>Certification</h2><div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={toggleEdit}><img className="h2EditLogo" src={editLogo}/></button></div></div> : <div className="certificationTitleDiv h2Underline"><h2>Certification</h2></div>}
            {edit ? <div className="certificationsDiv">{displayCertificationWithDeleteBtn()}</div> : <div className="certificationsDiv">{displayCertification()}</div>}
            {edit ? dispalyInputField() : null}
        </div>
    )
}

export default Certifications;