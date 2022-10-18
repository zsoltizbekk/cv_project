import React, {useState} from "react";

const addBtn = require('../../assets/add.png');
const deleteBtn = require('../../assets/delete.png');

const Language = (props) => {

    const [addLanguageBtn, setAddLanguageBtn] = useState (false);
    const [editLanguage, setEditLanguage] = useState (false);
    const [language, setLanguage] = useState (props.language);
    const [languageName, setLanguageName] = useState ("");
    const [languageSkillLevel, setLanguageSkillLevel] = useState ("");
    
    const toggleAddLanguageBtnOn = () => setAddLanguageBtn(true);
    const toggleAddLanguageBtnOff = () => setAddLanguageBtn(false);
    const toggleAddNewLanguage = () => setEditLanguage(!editLanguage)
    const addNewLanguage = () => {
        return (<div className="addNewLanguageInputDiv">
            <h3>Language: </h3><input onKeyDown={(e) => {if (e.keyCode === 13) sendLanguage()}} onChange={saveLanguageName} className="h3input" type="text" />
            <h3>Skill level: </h3><input onKeyDown={(e) => {if (e.keyCode === 13) sendLanguage()}} onChange={saveLanguageSkillLevel} className="h3input" type="text" />
            <button className="langAddBtn" onClick={sendLanguage}>Add</button></div>);
    }
    const saveLanguageName = (e) => setLanguageName(e.target.value)

    const saveLanguageSkillLevel = (e) => setLanguageSkillLevel(e.target.value)

    const sendLanguage = () => {
        props.setLanguage([languageName, languageSkillLevel]);
        toggleAddNewLanguage();
    }

    const deleteLanguage = (index) => {
        let temp = language.filter((lang, i) =>i !== index);
        setLanguage(temp);
        props.deleteLanguage(temp);
    }
    return (
        <div className="languageDiv" onMouseEnter={toggleAddLanguageBtnOn} onMouseLeave={toggleAddLanguageBtnOff}>
            <div><h2 className="h2Left">Language</h2></div>
            <div className="addNewLanguage">
                {props.language.map((lang, index)=>(
                    <div key={index} className="displayedLanguage"><h3>{lang.name} - {lang.level}</h3>{addLanguageBtn && <button className="deleteLanguageBtn" onClick={() => deleteLanguage(index)}><img className="h3EditLogo" src={deleteBtn}/></button>}</div>
                ))}
                {addLanguageBtn ? editLanguage ? addNewLanguage() : <button className="addNewLanguageBtn" onClick={toggleAddNewLanguage}><img className="h3EditLogo" src={addBtn}/></button> : editLanguage ? addNewLanguage():null}
            </div>
        </div>
    )
}

export default Language;