import React, { useState } from "react";
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

const App = () => {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [photo, setPhoto] = useState(
    "https://avatars.githubusercontent.com/u/97851758?s=400&u=f9ab34646d729f51c0ae98a3c110ace38987787a&v=4"
  );
  const [contact, setContact] = useState(
    { Address: "Address" },
    { Phone: "+1 (23) 456 78 90" },
    { Email: "email@addre.ss" }
  );
  const [language, setLanguage] = useState([
    { name: "english", level: "expter" },
    { name: "german", level: "low" },
  ]);
  const [summary, setSummary] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [skill, setSkill] = useState(["HTML", "CSS", "JavaScript"]);
  const [experience, setExperience] = useState([
    {
      from: "2022-01-01",
      to: "2022-02-01",
      work: "work",
      tasks: ["do things", "do other things", "drink coffee"],
    },
  ]);
  const [education, setEducation] = useState([
    { from: "2021-01-01", to: "2022-01-01", school: "DEIK", degree: "bsc" },
  ]);
  const [certification, setCertification] = useState([
    { name: "certifications name", skill: ["html", "css", "js"] },
    { name: "other cert", skill: ["asd", "qwe"] },
  ]);

  //NAME
  const saveFirstName = (name) => setFirstName(name);
  const saveLastName = (name) => setLastName(name);
  //PHOTO
  const savePhoto = (photoUrl) => setPhoto(photoUrl);
  //CONTACT
  const saveAddress = (address) =>
    setContact((prevState) => ({ ...prevState, Address: address }));
  const savePhone = (phone) =>
    setContact((prevState) => ({ ...prevState, Phone: phone }));
  const saveEmail = (email) =>
    setContact((prevState) => ({ ...prevState, Email: email }));

  const saveLanguage = (obj) => {
    console.log(language);
    const [languageName, languageSkillLevel] = obj;
    let temp = language;
    temp.push({ name: languageName, level: languageSkillLevel });
    setLanguage(temp);
  };
  const deleteLanguage = (lang) => setLanguage(lang);
  const saveSummary = (temp) => setSummary(temp);
  const saveSkill = (newSkill) => {
    let temp = skill;
    temp.push(newSkill);
    setSkill(temp);
  };
  const deleteSkill = (skills) => setSkill(skills);

  const saveExperience = (obj) => {
    const [from, to, work, tasks] = obj;
    let temp = experience;
    temp.push({ from, to, work, tasks });
    setExperience(temp);
  };
  const deleteExperience = (obj) => setExperience(obj);

  const saveEducation = (obj) => {
    let temp = education;
    const [from, to, school, degree] = obj;
    temp.push({ from, to, school, degree });
    setEducation(temp);
  };
  const deleteEducation = (obj) => setEducation(obj);

  const saveCertification = (obj) => {
    let temp = certification;
    const [name, skill] = obj;
    temp.push({ name, skill });
    setCertification(temp);
  };
  const deleteCertification = (obj) => setCertification(obj);

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
            setFirstName={saveFirstName}
            firstName={firstName}
            setLastName={saveLastName}
            lastName={lastName}
          />
          <Photo setPhoto={savePhoto} photoUrl={photo} />
          <Contact
            setAddress={saveAddress}
            address={contact.Address}
            setPhone={savePhone}
            phone={contact.Phone}
            setEmail={saveEmail}
            email={contact.Email}
          />
          <Language
            setLanguage={saveLanguage}
            language={language}
            deleteLanguage={deleteLanguage}
          />
        </div>
        <div className="right">
          <Summary summary={summary} setSummary={saveSummary} />
          <Skills
            skill={skill}
            setSkill={saveSkill}
            deleteSkill={deleteSkill}
          />
          <Experience
            experience={experience}
            setExperience={saveExperience}
            deleteExperience={deleteExperience}
          />
          <Education
            education={education}
            setEducation={saveEducation}
            deleteEducation={deleteEducation}
          />
          <Certifications
            certification={certification}
            setCertification={saveCertification}
            deleteCertification={deleteCertification}
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
};

export default App;
