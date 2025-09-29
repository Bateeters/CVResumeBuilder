import './App.css'
import CVDisplay from './components/CVDisplay'
import Education from './components/SideNav/Education'
import Experience from './components/SideNav/Experience'
import GeneralInfo from './components/SideNav/GeneralInfo'
import Skills from './components/SideNav/Skills'
import './App.css'
import { useState } from 'react'

function App() {
  const [info, setInfo] = useState({
    general: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
      links: []
    },
    experience: [],
    education: [],
    skills: {
      softSkills: "",
      technicalSkills: ""
    }
  })

  return (
    <>
      <div className='container-fluid'>
        <div className='row text-center p-4' style={{backgroundColor: "#444444", color: "white"}}>
          <h1>CV / Resume Builder</h1>
        </div>
      </div>
      <div className='container-fluid py-3' style={{backgroundColor: "whitesmoke"}}>
        <div className='row'>
          <div className='col-4'>
            <GeneralInfo 
              general = {info.general}
              setGeneral = {(updatedGeneral) => setInfo({ ...info, general: updatedGeneral})}
            />
            <Experience 
              experience = {info.experience}
              setExperience = {(updatedExperience) => setInfo({ ...info, experience: updatedExperience})}
            />
            <Education 
              education = {info.education}
              setEducation = {(updatedEducation) => setInfo({ ...info, education: updatedEducation})}
            />
            <Skills
              skills = {info.skills}
              setSkills = {(updatedSkills) => setInfo({ ...info, skills: updatedSkills})}
            />
          </div>
          <div className='col-8'>
            <CVDisplay 
              general = {info.general}
              experience = {info.experience}
              education = {info.education}
              skills = {info.skills}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
