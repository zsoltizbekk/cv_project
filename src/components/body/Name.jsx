import React from "react";

const editLogo = require('../../assets/edit.png');
const submitLogo = require('../../assets/submit.png');

class Name extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstNameEditenabled : false,
            firstNameEdit : false,
            firstName : this.props.firstName,
            lastNameEditenabled : false,
            lastNameEdit : false,
            lastName : this.props.lastName,
        }
    }
    
    toggleFirstNameEditEnabled = () => {
        this.setState(state => ({
            ...state,
            firstNameEditenabled : true,
        }))
    }

    toggleFirstNameEditDisabled = () => {
        this.setState(state => ({
            ...state,
            firstNameEditenabled : false,
        }))
    }

    toggleLastNameEditEnabled = () => {
        this.setState(state => ({
            ...state,
            lastNameEditenabled : true,
        }))
    }

    toggleLastNameEditDisabled = () => {
        this.setState(state => ({
            ...state,
            lastNameEditenabled : false,
        }))
    }

    toggleFirstNameEdit = () => {
        this.setState(state => ({
            ...state,
            firstNameEdit: !state.firstNameEdit
        }))
    }

    toggleLastNameEdit = () => {
        this.setState(state => ({
            ...state,
            lastNameEdit: !state.lastNameEdit
        }))
    }

    saveFirstName = (e) => {
        this.setState(state => ({
            ...state,
            firstName : e.target.value
        }))
    }

    saveLastName = (e) => {
        this.setState(state => ({
            ...state,
            lastName : e.target.value
        }))
    }

    setFirstName = () => {
        this.props.setFirstName(this.state.firstName);
        this.toggleFirstNameEdit();
    }

    setLastName = () => {
        this.props.setLastName(this.state.lastName);
        this.toggleLastNameEdit();
    }
    displayEditFirstName =() =>{
            return <div className="firstName"><input className="h1input"onKeyDown={(e) => {if (e.keyCode == 13) this.setFirstName()}} value={this.state.firstName} onChange={this.saveFirstName}/><button onClick={this.setFirstName}> <img className="h1SubmitLogo" src={submitLogo}></img> </button></div>
    }

    displayEditSecondName =() =>{
        return <div className="lastName"><input className="h1input" onKeyDown={(e) => {if (e.keyCode == 13) this.setLastName()}} value={this.state.lastName} onChange={this.saveLastName}/> <button onClick={this.setLastName}> <img className="h1SubmitLogo" src={submitLogo}></img> </button></div>
    }

    render(){
        return (
        <div className="nameSegment">
            <div className="firstName" onMouseEnter={this.toggleFirstNameEditEnabled} onMouseLeave={this.toggleFirstNameEditDisabled}>
                {this.state.firstNameEdit ? this.displayEditFirstName()  : <h1 className="name">{this.props.firstName}</h1>}
                {this.state.firstNameEditenabled? 
                this.state.firstNameEdit ? null :
                <button onClick={this.toggleFirstNameEdit}> <img className="h1EditLogo"src={editLogo} alt="" /> </button> 
                : null} 
                
            </div>
            <div className="lastName" onMouseEnter={this.toggleLastNameEditEnabled} onMouseLeave={this.toggleLastNameEditDisabled}>
            {this.state.lastNameEdit ? this.displayEditSecondName() : <h1 className="name">{this.props.lastName}</h1>}
                {this.state.lastNameEditenabled? 
                this.state.lastNameEdit ? null:
                <button onClick={this.toggleLastNameEdit}> <img className="h1EditLogo"src={editLogo}  alt="" /> </button> 
                : null}
            </div>
        </div>
        )
    }
}

export default Name;