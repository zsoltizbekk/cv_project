import React, {useState} from "react";

const editLogo = require('../../assets/edit.png');
const submitLogo = require('../../assets/submit.png');

const Contact = (props) => {
    const [addressEditable, setAddressEditable] = useState (false);
    const [addressEdit, setAddressEdit] = useState (false);
    const [address, setAddress] = useState (props.address);

    const [phoneEditable, setPhoneEditable] = useState (false);
    const [phoneEdit, setPhoneEdit] = useState (false);
    const [phone, setPhone] = useState (props.phone);

    const [emailEditable, setEmailEditable] = useState (false);
    const [emailEdit, setEmailEdit] = useState (false);
    const [email, setEmail] = useState (props.email);

//ADDRESS
    const toggleAddressEditableOn = () => setAddressEditable(true);
    const toggleAddressEditableOff = () => setAddressEditable(false);
    const toggleAddressEdit = () => setAddressEdit(!addressEdit)

    const displayAddressEditable = () => {
        return <div className="addressEditableDiv"><h3>{props.address}</h3> <button onClick={toggleAddressEdit}><img className="h3EditLogo" src={editLogo}/></button></div>
    }

    const displayAddressEdit = () => {
        return <div className="addressEditDiv"><input onKeyDown={(e) => {if (e.keyCode == 13) sendAddress() }} onChange={saveAddressInput} className="h3input" type="text" /><button onClick={sendAddress}><img className="h3SubmitLogo" src={submitLogo}/></button></div>
    }

    const saveAddressInput = (e) => setAddress(e.target.value)
    
    const sendAddress = () => {
        props.setAddress(address);
        toggleAddressEdit();
    }

//PHONE
    const togglePhoneEditableOn = () => setPhoneEditable(true);
    const togglePhoneEditableOff = () => setPhoneEditable(false);
    const togglePhoneEdit = () => setPhoneEdit(!phoneEdit)

    const displayPhoneEditable = () => {
        return <div className="phoneEditableDiv"><h3>{props.phone}</h3> <button onClick={togglePhoneEdit}><img className="h3EditLogo" src={editLogo}/></button></div>
    }

    const displayPhoneEdit = () => {
        return <div className="phoneEditDiv"><input onKeyDown={(e) => {if (e.keyCode === 13) sendPhone()}} onChange={savePhoneInput} className="h3input" type="text" /><button onClick={sendPhone}><img className="h3SubmitLogo" src={submitLogo}/></button></div>
    }

    const savePhoneInput = (e) => setPhone(e.target.value)
    const sendPhone = () => {
        props.setPhone(phone);
        togglePhoneEdit();
    }

//EMAIL
    const toggleEmailEditableOn = () => setEmailEditable(true);
    const toggleEmailEditableOff = () => setEmailEditable(false);
    const toggleEmailEdit = () => setEmailEdit(!emailEdit);

    const displayEmailEditable = () => {
        return <div className="emailEditableDiv"><h3>{props.email}</h3> <button onClick={toggleEmailEdit}><img className="h3EditLogo" src={editLogo}/></button></div>
    }

    const displayEmailEdit = () => {
        return <div className="emailEditDiv"><input onKeyDown={(e) => {if (e.keyCode === 13) sendEmail()}} onChange={saveEmailInput} className="h3input" type="text" /><button onClick={sendEmail}><img className="h3SubmitLogo" src={submitLogo}/></button></div>
    }

    const saveEmailInput = (e) => setEmail(e.target.value);

    const sendEmail = () => {
        props.setEmail(email);
        toggleEmailEdit();
    }

    return (
        <div>
            <h2 className="h2Left">Contact</h2>
            <div className="addressDiv" onMouseEnter={toggleAddressEditableOn} onMouseLeave={toggleAddressEditableOff} >
                <h3 style={{fontFamily: "myfont_regular"}}>Address:</h3> 
                {addressEdit ? displayAddressEdit() : addressEditable ? displayAddressEditable() : <h3>{props.address}</h3>}
            </div>

            <div className="phoneDiv" onMouseEnter={togglePhoneEditableOn} onMouseLeave={togglePhoneEditableOff} >
                <h3 style={{fontFamily: "myfont_regular"}}>Phone:</h3> 
                {phoneEdit ? displayPhoneEdit() : phoneEditable ? displayPhoneEditable() : <h3>{props.phone}</h3>}
            </div>

            <div className="emailDiv" onMouseEnter={toggleEmailEditableOn} onMouseLeave={toggleEmailEditableOff} >
                <h3 style={{fontFamily: "myfont_regular"}}>Email:</h3> 
                {emailEdit ? displayEmailEdit() : emailEditable ? displayEmailEditable() : <h3>{props.email}</h3>}
            </div>
        </div>
    )
}

export default Contact;