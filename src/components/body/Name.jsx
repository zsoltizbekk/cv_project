import React, {useState} from "react";

const editLogo = require('../../assets/edit.png');
const submitLogo = require('../../assets/submit.png');

const Name = (props) => {
    
    const [firstNameEditenabled, setFirstNameEditenabled] = useState (false);
    const [firstNameEdit, setFirstNameEdit] = useState (false);
    const [firstName, setFirstName] = useState (props.firstName);
    const [lastNameEditenabled, setLastNameEditenabled] = useState (false);
    const [lastNameEdit, setLastNameEdit] = useState (false);
    const [lastName, setLastName] = useState (props.lastName);


    const toggleFirstNameEditEnabled = () => setFirstNameEditenabled(true);
    const toggleFirstNameEditDisabled = () => setFirstNameEditenabled(false);
    const toggleLastNameEditEnabled = () => setLastNameEditenabled(true);
    const toggleLastNameEditDisabled = () => setLastNameEditenabled(false);
    const toggleFirstNameEdit = () => setFirstNameEdit(!firstNameEdit)
    const toggleLastNameEdit = () => setLastNameEdit(!lastNameEdit)

    const saveFirstName = (e) => setFirstName(e.target.value);
    const saveLastName = (e) => setLastName(e.target.value);

    const sendFirstName = () => {
        props.setFirstName(firstName);
        toggleFirstNameEdit();
    }

    const sendLastName = () => {
        props.setLastName(lastName);
        toggleLastNameEdit();
    }
    
    const displayEditFirstName = () =>{
            return <div className="firstName"><input className="h1input"onKeyDown={(e) => {if (e.keyCode == 13) sendFirstName()}} value={firstName} onChange={saveFirstName}/><button onClick={sendFirstName}> <img className="h1SubmitLogo" src={submitLogo}></img> </button></div>
    }

    const displayEditSecondName = () =>{
        return <div className="lastName"><input className="h1input" onKeyDown={(e) => {if (e.keyCode == 13) sendLastName()}} value={lastName} onChange={saveLastName}/> <button onClick={sendLastName}> <img className="h1SubmitLogo" src={submitLogo}></img> </button></div>
    }

    return (
        <div className="nameSegment">
            <div className="firstName" onMouseEnter={toggleFirstNameEditEnabled} onMouseLeave={toggleFirstNameEditDisabled}>
                {firstNameEdit ? displayEditFirstName()  : <h1 className="name">{props.firstName}</h1>}
                {firstNameEditenabled? 
                firstNameEdit ? null :
                <button onClick={toggleFirstNameEdit}> <img className="h1EditLogo"src={editLogo} alt="" /> </button> 
                : null} 
                
            </div>
            <div className="lastName" onMouseEnter={toggleLastNameEditEnabled} onMouseLeave={toggleLastNameEditDisabled}>
            {lastNameEdit ? displayEditSecondName() : <h1 className="name">{props.lastName}</h1>}
                {lastNameEditenabled? 
                lastNameEdit ? null:
                <button onClick={toggleLastNameEdit}> <img className="h1EditLogo"src={editLogo}  alt="" /> </button> 
                : null}
            </div>
        </div>
    )    
}

export default Name;