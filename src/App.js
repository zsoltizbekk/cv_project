import React from "react";
import Header from "./components/Header";

import Name from "./components/body/Name";
import Photo from "./components/body/Photo";
import Contact from "./components/body/Contact";
import Language from "./components/body/Language";
import Summary from "./components/body/Summary";
import Skills from "./components/body/Skills";
import Experience from "./components/body/Experience";
import Education from "./components/body/Education";
import Certifications from "./components/body/Certifications";

import Footer from "./components/Footer";
import "./styles/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      photo:
        "https://avatars.githubusercontent.com/u/97851758?s=400&u=f9ab34646d729f51c0ae98a3c110ace38987787a&v=4",
      contact: {
        Address: "Address",
        Phone: "+1 (23) 456 78 90",
        Email: "email@addre.ss",
      },
      language: [
        {
          name: "english",
          level: "expert",
        },
        {
          name: "german",
          level: "low",
        },
      ],
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skill: ["HTML", "CSS", "JavaScript"],
      experience: [
        {
          from: "2022-01-01",
          to: "2022-02-01",
          work: "work",
          tasks: ["do things", "do other things", "drink coffee"],
        },
      ],
      education: [
        {
          from: "2021-01-01",
          to: "2022-01-01",
          school: "DEIK",
          degree: "bsc",
        },
      ],
      certification: [
        {
          name: "certifications name",
          skill: ["html", "css", "js"],
        },
        {
          name: "other cert",
          skill: ["asd", "qwe"],
        },
      ],
    };
  }

  setFirstName = (name) => {
    this.setState({
      ...this.state,
      firstName: name,
    });
  };

  setLastName = (name) => {
    this.setState({
      ...this.state,
      lastName: name,
    });
  };

  setPhoto = (photoUrl) => {
    this.setState({
      ...this.state,
      photo: photoUrl,
    });
  };

  setAddress = (address) => {
    this.setState((state) => ({
      ...state,
      contact: {
        ...state.contact,
        Address: address,
      },
    }));
  };

  setPhone = (phone) => {
    this.setState((state) => ({
      ...state,
      contact: {
        ...state.contact,
        Phone: phone,
      },
    }));
  };

  setEmail = (email) => {
    this.setState((state) => ({
      ...state,
      contact: {
        ...state.contact,
        Email: email,
      },
    }));
  };

  setLanguage = (obj) => {
    const [languageName, languageSkillLevel] = obj;
    let temp = this.state.language;
    temp.push({ name: languageName, level: languageSkillLevel });
    this.setState((state) => ({
      ...state,
      language: temp,
    }));
  };

  deleteLanguage = (lang) => {
    this.setState((state) => ({
      ...state,
      language: lang,
    }));
  };

  setSummary = (temp) => {
    this.setState((state) => ({
      ...state,
      summary: temp,
    }));
  };

  setSkill = (newSkill) => {
    console.log(newSkill);
    let temp = this.state.skill;
    temp.push(newSkill);
    this.setState((state) => ({
      ...state,
      skill: temp,
    }));
  };

  deleteSkill = (skills) => {
    this.setState((state) => ({
      ...state,
      skill: skills,
    }));
  };

  setExperience = (obj) => {
    const [from, to, work, tasks] = obj;
    let temp = this.state.experience;
    temp.push({ from, to, work, tasks });
    this.setState((state) => ({
      ...state,
      experience: temp,
    }));
  };

  deleteExperience = (obj) => {
    console.log(obj);
    this.setState((state) => ({
      ...state,
      experience: obj,
    }));
  };

  deleteEducation = (obj) => {
    this.setState((state) => ({
      ...state,
      education: obj,
    }));
  };

  setEducation = (obj) => {
    let temp = this.state.education;
    const [from, to, school, degree] = obj;
    temp.push({ from, to, school, degree });
    this.setState((state) => ({
      ...state,
      education: temp,
    }));
    console.log(this.state.education);
  };

  deleteCertification = (obj) => {
    this.setState((state) => ({
      ...state,
      certification: obj,
    }));
  };

  setCertification = (obj) => {
    console.log(obj);
    let temp = this.state.certification;
    const [name, skill] = obj;
    temp.push({ name, skill });
    this.setState((state) => ({
      ...state,
      certification: temp,
    }));
    console.log(this.state.certification);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="cvTop">
          <div className="cvTopLeft"></div>
          <div className="cvTopRight"></div>
        </div>
        <div className="body">
          <div className="left">
            <Name
              setFirstName={this.setFirstName}
              firstName={this.state.firstName}
              setLastName={this.setLastName}
              lastName={this.state.lastName}
            />
            <Photo setPhoto={this.setPhoto} photoUrl={this.state.photo} />
            <Contact
              setAddress={this.setAddress}
              address={this.state.contact.Address}
              setPhone={this.setPhone}
              phone={this.state.contact.Phone}
              setEmail={this.setEmail}
              email={this.state.contact.Email}
            />
            <Language
              setLanguage={this.setLanguage}
              language={this.state.language}
              deleteLanguage={this.deleteLanguage}
            />
          </div>
          <div className="right">
            <Summary
              summary={this.state.summary}
              setSummary={this.setSummary}
            />
            <Skills
              skill={this.state.skill}
              setSkill={this.setSkill}
              deleteSkill={this.deleteSkill}
            />
            <Experience
              experience={this.state.experience}
              setExperience={this.setExperience}
              deleteExperience={this.deleteExperience}
            />
            <Education
              education={this.state.education}
              setEducation={this.setEducation}
              deleteEducation={this.deleteEducation}
            />
            <Certifications
              certification={this.state.certification}
              setCertification={this.setCertification}
              deleteCertification={this.deleteCertification}
            />
          </div>
        </div>

        <div className="cvBot">
          <div className="cvBotLeft"></div>
          <div className="cvBotRight"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
