import React from "react";

const editLogo = require('../../assets/edit.png');
const deleteLogo = require('../../assets/delete.png');

class Skills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editable : false,
            edit : false,
            skillCopy : this.props.skill,
            skill : "",
        }
    }

    toggleSkillEditOn = () => {
        this.setState(state => ({
            ...state,
            editable : true,
        }));
    }

    toggleSkillEditOff = () => {
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

    saveSkill = (e) => {
        this.setState(state => ({
            ...state,
            skill : e.target.value
        }))
    }

    setSkill = () => {
        this.props.setSkill(this.state.skill);
        this.setState(state =>({
            ...state,
            skill : "",
        }));
        this.toggleEdit();
    }

    displayInput = () => {
        return (<div><input className="skillInput h3input" value={this.state.skill} onKeyDown={(e) => {if (e.keyCode === 13) this.setSkill()}} onChange={this.saveSkill} type="text"/><button className="skillAddBtn" onClick={() => this.setSkill()}>Add</button></div>);
    }

    displaySkill = () => {
        return this.props.skill.map((e, index) =>(
            <li key={index}>{e}</li>
        ))
    }

    displaySkillWithDeleteBtn = () => {
        return this.props.skill.map((e, index) =>(
            <li key={index}>{e}<button className="deleteSkillBtn" onClick={()=>this.deleteSkill(index)}><img className="h3EditLogo" src={deleteLogo}/></button></li>
        ))
    }

    displayEdit = () => {
        return (<div className="titleEditBtnDiv"><button className="titleEditBtn" onClick={this.toggleEdit}><img className="h2EditLogo"src={editLogo}/></button></div>) 
    }

    deleteSkill = (delIndex) => {
        console.log(this.props.skill)
        let temp = this.props.skill.filter((skill, i) =>i !== delIndex);
        this.setState(state =>({
            ...state,
            skillCopy : temp,
        }));
        this.props.deleteSkill(temp);
    }

    render (){
        return (
        <div className="skillDiv" onMouseEnter={this.toggleSkillEditOn} onMouseLeave={this.toggleSkillEditOff}>
            {this.state.editable ? <div className="skillTitleDiv h2Underline"><h2>Skill Highlights</h2>{this.displayEdit()}</div> :<div className="skillTitleDiv h2Underline"><h2>Skill Highlights</h2></div>}
            
            {this.state.editable ? this.displaySkillWithDeleteBtn() : this.displaySkill()}
            {this.state.edit && this.displayInput()}
            
        </div>
        )
    }
}

export default Skills;