import React from "react";

const editButton = require('../../assets/edit.png');
const submitButton = require('../../assets/submit.png');

class Photo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photoUrlEditable : false,
            photoUrlEdit : false,
            photoUrl : this.props.photoUrl,
        };
    }

    togglePhotoUrlEditableOn = () =>{
        this.setState(state =>({
            ...state,
            photoUrlEditable: true,
        }));
    }

    togglePhotoUrlEditableOff = () =>{
        this.setState(state =>({
            ...state,
            photoUrlEditable: false,
        }));
    }

    togglePhotoUrlEdit = () => {
        this.setState(state =>({
            ...state,
            photoUrlEdit: !state.photoUrlEdit
        }));
    }

    savePhotoUrl = (e) => {
        this.setState(state =>({
            ...state,
            photoUrl : e.target.value
        }));

    }

    setPhotoUrl =() => {
        this.props.setPhoto(this.state.photoUrl);
        this.togglePhotoUrlEdit();
    }

    render (){
        return (
        <div className="photoDiv" onMouseEnter={this.togglePhotoUrlEditableOn} onMouseLeave={this.togglePhotoUrlEditableOff}>
            {this.state.photoUrlEditable? this.state.photoUrlEdit? <img className = "profilePicture" src={this.props.photoUrl}></img> :<div className="pictureAndButton"><img className = "profilePicture" src={this.props.photoUrl}></img><button onClick={this.togglePhotoUrlEdit}><img className="h1EditLogo" src={editButton} /></button></div> :<img className = "profilePicture" src={this.props.photoUrl}></img>}
            {this.state.photoUrlEdit? <div className="photoInput"><input className = "h2input"onKeyDown={(e) => {if (e.keyCode == 13) this.setPhotoUrl()}} onChange={this.savePhotoUrl}></input><button onClick={this.setPhotoUrl}><img className="h1SubmitLogo" src={submitButton} /></button></div> : null }
        </div>
        )
    }
}

export default Photo;