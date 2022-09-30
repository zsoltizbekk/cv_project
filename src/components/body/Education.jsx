import React from "react";
import moment from 'moment';

const editLogo = require('../../assets/edit.png');
const addLogo = require('../../assets/add.png');
const deleteLogo = require('../../assets/delete.png');

class Education extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            edit : false,
            editable : false,
            from : "",
            to: "",
            school: "",
            degree : "",
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

    displayEducation = () => {
        return (
            this.props.education.map((edu, index) => (
                (<div className="educationListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{edu.from} - {edu.to}</h3>
                    <h3> <span style={{fontFamily: "myfont_regular"}}>{edu.school} - </span>{edu.degree}</h3>
                </div>)
            ))
        );
    }

    displayEducationWithDeleteBtn = () => {
        return (
            this.props.education.map((edu, index) => (
                (<div className="educationListDiv" key={index}>
                    <h3 style={{fontFamily: "myfont_regular"}}>{edu.from} - {edu.to}</h3>
                    <h3> <span style={{fontFamily: "myfont_regular"}}>{edu.school} - </span>{edu.degree}</h3>
                    <button className="deleteEduBtn" onClick={()=>{this.deleteEdu(index)}}><img className="h3EditLogo" src={deleteLogo}/></button>
                </div>)
            ))
        );
    }

    deleteEdu = (i) => {
        let temp = this.props.education.filter((edu, index)=> i!==index);
        this.props.deleteEducation(temp);
    }
    dispalyInputField = () => {
        return (
            <div className="educationInputFieldDiv">
                <h2>Add new education:</h2>
                <h3>From:</h3>
                <input className="h3input" onChange={this.saveFrom} type="date" />
                <h3>To:</h3>
                <input className="h3input" onChange={this.saveTo} type="date" />
                <h3>School name:</h3>
                <input className="h3input" onChange={this.saveSchoolName} type="text" />
                <h3>Educational level:</h3>
                <input className="h3input" onChange={this.saveDegree} type="text" />
                <button className="eduAddBtn" onClick={() => this.setEducation()}>Add</button>
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

    saveSchoolName = (e) => {
        this.setState(state => ({
            ...state,
            school : e.target.value,
        }));
    }

    saveDegree = (e) => {
        this.setState(state => ({
            ...state,
            degree : e.target.value,
        }));
    }

    setEducation = () => {
        this.props.setEducation([
            this.state.from, 
            this.state.to, 
            this.state.school, 
            this.state.degree]);
        this.toggleEdit();
    }

    render (){
        return (
            <div className="educationDiv" onMouseEnter={this.toggleEditableOn} onMouseLeave={this.toggleEditableOff}>
                {this.state.editable ? <div className="educationTitleDiv h2Underline"><h2>Education</h2><div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={this.toggleEdit}><img className="h2EditLogo" src={editLogo}/></button></div></div> : <div className="educationTitleDiv h2Underline"><h2>Education</h2></div>}
                {this.state.edit ? <div className="educationsDiv">{this.displayEducationWithDeleteBtn()}</div> : <div className="educationsDiv">{this.displayEducation()}</div>}
                {this.state.edit ? this.dispalyInputField() : null}
            </div>
        )
    }
}

export default Education;