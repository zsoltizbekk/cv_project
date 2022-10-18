import React, {useState} from "react";

const editButton = require('../../assets/edit.png');
const submitButton = require('../../assets/submit.png');

const Photo = (props) => {
    const [photoUrlEditable, setPhotoUrlEditable] = useState(false);
    const [photoUrlEdit, setPhotoUrlEdit] = useState(false);
    const [photoUrl, setPhotoUrl] = useState(props.photoUrl);

    const togglePhotoUrlEditableOn = () => setPhotoUrlEditable(true);
    const togglePhotoUrlEditableOff = () => setPhotoUrlEditable(false);
    const togglePhotoUrlEdit = () => setPhotoUrlEdit(!photoUrlEdit)
    const savePhotoUrl = (e) => setPhotoUrl(e.target.value);
    const sendPhotoUrl = () => {
        props.setPhoto(photoUrl);
        togglePhotoUrlEdit();
    }
    return (
        <div className="photoDiv" onMouseEnter={togglePhotoUrlEditableOn} onMouseLeave={togglePhotoUrlEditableOff}>
            {photoUrlEditable? photoUrlEdit? <img className = "profilePicture" src={props.photoUrl}></img> :<div className="pictureAndButton"><img className = "profilePicture" src={props.photoUrl}></img><button onClick={togglePhotoUrlEdit}><img className="h1EditLogo" src={editButton} /></button></div> :<img className = "profilePicture" src={props.photoUrl}></img>}
            {photoUrlEdit? <div className="photoInput"><input className = "h2input"onKeyDown={(e) => {if (e.keyCode == 13) sendPhotoUrl()}} onChange={savePhotoUrl}></input><button onClick={setPhotoUrl}><img className="h1SubmitLogo" src={submitButton} /></button></div> : null }
        </div>
    )
}

export default Photo;