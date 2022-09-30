import React from "react";

const editLogo = require('../../assets/edit.png');
const submitLogo = require('../../assets/submit.png');

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addressEditable : false,
            addressEdit : false,
            address : this.props.address,
            phoneEditable : false,
            phoneEdit : false,
            phone : this.props.phone,
            emailEditable : false,
            emailEdit: false,
            email: this.props.email
        }
    }
//ADDRESS
    toggleAddressEditableOn = () => {
        this.setState(state => ({
            ...state,
            addressEditable: true,
        }));
    }

    toggleAddressEditableOff = () => {
        this.setState(state => ({
            ...state,
            addressEditable: false,
        }));
    }
    
    toggleAddressEdit = () => {
        this.setState(state => ({
            ...state,
            addressEdit: !state.addressEdit
        }));
    }

    displayAddressEditable = () => {
        return <div className="addressEditableDiv"><h3>{this.props.address}</h3> <button onClick={this.toggleAddressEdit}><img className="h3EditLogo" src={editLogo}/></button></div>
    }

    displayAddressEdit = () => {
        return <div className="addressEditDiv"><input onKeyDown={(e) => {if (e.keyCode == 13) this.setAddress() }} onChange={this.saveAddressInput} className="h3input" type="text" /><button onClick={this.setAddress}><img className="h3SubmitLogo" src={submitLogo}/></button></div>
    }

    saveAddressInput = (e) => {
        this.setState(state =>({
            ...state,
            address: e.target.value
        }));
        
    }

    setAddress = () => {
        this.props.setAddress(this.state.address);
        this.toggleAddressEdit();
    }

//PHONE
    togglePhoneEditableOn = () => {
        this.setState(state => ({
            ...state,
            phoneEditable: true,
        }));
    }

    togglePhoneEditableOff = () => {
        this.setState(state => ({
            ...state,
            phoneEditable: false,
        }));
    }

    togglePhoneEdit = () => {
        this.setState(state => ({
            ...state,
            phoneEdit: !state.phoneEdit
        }));
    }

    displayPhoneEditable = () => {
        return <div className="phoneEditableDiv"><h3>{this.props.phone}</h3> <button onClick={this.togglePhoneEdit}><img className="h3EditLogo" src={editLogo}/></button></div>
    }

    displayPhoneEdit = () => {
        return <div className="phoneEditDiv"><input onKeyDown={(e) => {if (e.keyCode === 13) this.setPhone()}} onChange={this.savePhoneInput} className="h3input" type="text" /><button onClick={this.setPhone}><img className="h3SubmitLogo" src={submitLogo}/></button></div>
    }

    savePhoneInput = (e) => {
        this.setState(state =>({
            ...state,
            phone: e.target.value
        }));   
    }

    setPhone = () => {
        this.props.setPhone(this.state.phone);
        this.togglePhoneEdit();
    }

//EMAIL
    toggleEmailEditableOn = () => {
        this.setState(state => ({
            ...state,
            emailEditable: true,
        }));
    }

    toggleEmailEditableOff = () => {
        this.setState(state => ({
            ...state,
            emailEditable: false,
        }));
    }

    toggleEmailEdit = () => {
        this.setState(state => ({
            ...state,
            emailEdit: !state.emailEdit
        }));
    }

    displayEmailEditable = () => {
        return <div className="emailEditableDiv"><h3>{this.props.email}</h3> <button onClick={this.toggleEmailEdit}><img className="h3EditLogo" src={editLogo}/></button></div>
    }

    displayEmailEdit = () => {
        return <div className="emailEditDiv"><input onKeyDown={(e) => {if (e.keyCode === 13) this.setEmail()}} onChange={this.saveEmailInput} className="h3input" type="text" /><button onClick={this.setEmail}><img className="h3SubmitLogo" src={submitLogo}/></button></div>
    }

    saveEmailInput = (e) => {
        this.setState(state =>({
            ...state,
            email: e.target.value
        }));  
    }

    setEmail = () => {
        this.props.setEmail(this.state.email);
        this.toggleEmailEdit();
    }

    render (){
        return (
        <div>
            <h2 className="h2Left">Contact</h2>
            <div className="addressDiv" onMouseEnter={this.toggleAddressEditableOn} onMouseLeave={this.toggleAddressEditableOff} >
                <h3 style={{fontFamily: "myfont_regular"}}>Address:</h3> 
                {this.state.addressEdit ? this.displayAddressEdit() : this.state.addressEditable ? this.displayAddressEditable() : <h3>{this.props.address}</h3>}
            </div>

            <div className="phoneDiv" onMouseEnter={this.togglePhoneEditableOn} onMouseLeave={this.togglePhoneEditableOff} >
                <h3 style={{fontFamily: "myfont_regular"}}>Phone:</h3> 
                {this.state.phoneEdit ? this.displayPhoneEdit() : this.state.phoneEditable ? this.displayPhoneEditable() : <h3>{this.props.phone}</h3>}
            </div>

            <div className="emailDiv" onMouseEnter={this.toggleEmailEditableOn} onMouseLeave={this.toggleEmailEditableOff} >
                <h3 style={{fontFamily: "myfont_regular"}}>Email:</h3> 
                {this.state.emailEdit ? this.displayEmailEdit() : this.state.emailEditable ? this.displayEmailEditable() : <h3>{this.props.email}</h3>}
            </div>

        </div>
        )
    }
}

export default Contact;