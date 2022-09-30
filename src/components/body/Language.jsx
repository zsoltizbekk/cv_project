import React from "react";

const addBtn = require('../../assets/add.png');
const deleteBtn = require('../../assets/delete.png');

class Language extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addLanguageBtn: false,
            editLanguage: false,
            language : this.props.language,
            languageName:"",
            languageSkillLevel:"",
        }
    }
    
    toggleAddLanguageBtnOn = () => {
        this.setState(state =>({
            ...state,
            addLanguageBtn: true,
        }));
    }

    toggleAddLanguageBtnOff = () => {
        this.setState(state =>({
            ...state,
            addLanguageBtn: false,
        }));
    }

    toggleAddNewLanguage = () => {
        this.setState(state =>({
            ...state,
            editLanguage: !state.editLanguage
        }));
    }

    addNewLanguage = () => {
        return (<div className="addNewLanguageInputDiv">
            <h3>Language: </h3><input onKeyDown={(e) => {if (e.keyCode === 13) this.setLanguage()}} onChange={this.saveLanguageName} className="h3input" type="text" />
            <h3>Skill level: </h3><input onKeyDown={(e) => {if (e.keyCode === 13) this.setLanguage()}} onChange={this.saveLanguageSkillLevel} className="h3input" type="text" />
            <button className="langAddBtn" onClick={this.setLanguage}>Add</button></div>);
    }

    saveLanguageName = (e) => {
        this.setState(state => ({
            ...state,
            languageName: e.target.value
        }));
    }

    saveLanguageSkillLevel = (e) => {
        this.setState(state => ({
            ...state,
            languageSkillLevel: e.target.value
        }))
    }

    setLanguage = () => {
        this.props.setLanguage([this.state.languageName, this.state.languageSkillLevel]);
        this.toggleAddNewLanguage();
    }

    deleteLanguage = (index) => {
        let temp = this.state.language.filter((lang, i) =>i !== index);
        this.setState(state =>({
            ...state,
            language: temp
        }));
        this.props.deleteLanguage(temp);
    }

    render (){
        return (
        <div className="languageDiv" onMouseEnter={this.toggleAddLanguageBtnOn} onMouseLeave={this.toggleAddLanguageBtnOff}>
            <div><h2 className="h2Left">Language</h2></div>
            <div className="addNewLanguage">
                {this.props.language.map((lang, index)=>(
                    <div key={index} className="displayedLanguage"><h3>{lang.name} - {lang.level}</h3>{this.state.addLanguageBtn && <button className="deleteLanguageBtn" onClick={() => this.deleteLanguage(index)}><img className="h3EditLogo" src={deleteBtn}/></button>}</div>
                ))}
                {this.state.addLanguageBtn ? this.state.editLanguage ? this.addNewLanguage() : <button className="addNewLanguageBtn" onClick={this.toggleAddNewLanguage}><img className="h3EditLogo" src={addBtn}/></button> : this.state.editLanguage ? this.addNewLanguage():null}
            </div>
        </div>
        )
    }
}

export default Language;