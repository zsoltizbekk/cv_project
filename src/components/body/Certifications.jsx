import React from "react";

const editLogo = require('../../assets/edit.png');
const addLogo = require('../../assets/add.png');
const deleteLogo = require('../../assets/delete.png');

class Certifications extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            edit : false,
            editable : false,
            name : "",
            skill: [],
            tempSkill : "",
        }
    }

    toggleEditableOn = () => {
        this.setState(state =>({
            ...state,
            editable : true,
        }));
    }

    toggleEditableOff = () => {
        this.setState(state =>({
            ...state,
            editable : false,
        }));
    }

    toggleEdit = () => {
        this.setState(state =>({
            ...state,
            edit : !state.edit
        }));
    }

    displayCertification = () => {
        return (
            this.props.certification.map((cert, index) => (
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

    displayCertificationWithDeleteBtn = () => {
        return (
            this.props.certification.map((cert, index) => (
                (<div className="certificationListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{cert.name}</h3>
                    <ul>{cert.skill.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                    </ul>
                    <button className="deleteCertBtn" onClick={()=>{this.deleteCert(index)}}><img className="h3EditLogo" src={deleteLogo}/></button>
                </div>)
            ))
        );
    }

    deleteCert = (i) => {
        let temp = this.props.certification.filter((cert, index)=> i!==index);
        this.props.deleteCertification(temp);
    }

    dispalyInputField = () => {
        return (
            <div className="certificationInputFieldDiv">
                <h2>Add new certification:</h2>
                <h3>Name:</h3>
                <input className="h3input" onChange={this.saveName} type="text" />
                <h3>Skills:</h3>
                <ul>{this.state.skill.map((skill, index) =>(
                    <li key={index}>{skill}<button className="deleteSkillBtn" onClick={() => this.deleteSkill(index)}><img className="h3EditLogo" src={deleteLogo}/></button></li>
                ))}
                </ul>
                <div><input className="h3input" value={this.state.tempSkill} onChange={this.saveSkill} onKeyDown={(e)=>{if (e.keyCode === 13) this.setSkill()}} type="text" /><button className="skillAddBtn" onClick={()=>this.setSkill()}>Add</button></div>
                <button className="certAddBtn" onClick={() => this.setCertification()}>Add</button>
            </div>
        );
    }

    saveName = (e) => {
        this.setState(state => ({
            ...state,
            name : e.target.value,
        }));
    }

    saveSkill = (e) => {
        this.setState(state =>({
            ...state,
            tempSkill : e.target.value,
        }));
        console.log(this.state.tempSkill)
    }

    setSkill = () => {
        console.log("asdqwe")
        let temp = this.state.skill;
        temp.push(this.state.tempSkill);
        console.log(temp)
        this.setState(state => ({
            ...state,
            tempSkill : "",
            skill : temp,
        }));
    }

    setCertification = () => {
        console.log(this.state.name)
        this.props.setCertification([
            this.state.name, 
            this.state.skill
        ]);
        this.toggleEdit();
        this.setState(state =>({
            ...state,
            skill: [],
        }));
    }

    deleteSkill = (index) => {
        let temp = this.state.skill.filter((skill, i) => i!==index);
        this.setState(state =>({
            ...state,
            skill : temp,
        }));
    }


    render (){
        return (
            <div className="certificationDiv" onMouseEnter={this.toggleEditableOn} onMouseLeave={this.toggleEditableOff}>
                {this.state.editable ? <div className="certificationTitleDiv h2Underline"><h2>Certification</h2><div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={this.toggleEdit}><img className="h2EditLogo" src={editLogo}/></button></div></div> : <div className="certificationTitleDiv h2Underline"><h2>Certification</h2></div>}
                {this.state.edit ? <div className="certificationsDiv">{this.displayCertificationWithDeleteBtn()}</div> : <div className="certificationsDiv">{this.displayCertification()}</div>}
                {this.state.edit ? this.dispalyInputField() : null}
            </div>
        )
    }
}

export default Certifications;