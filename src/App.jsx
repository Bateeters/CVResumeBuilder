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
    education: [
      {
        school: "",
        degree: "",
        specialization: "",
        graduationDate: "",
      }
    ],
    experience: [
      {
        company: "",
        title: "",
        startDate: "",
        endDate: "",
      }
    ],
    skills: {
      softSkills: [],
      technicalSkills: []
    }
  })

  return (
    <>
      <div className='container-fluid'>
        <div className='row text-center p-4' style={{backgroundColor: "gray", color: "white"}}>
          <h1>CV / Resume Builder</h1>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <GeneralInfo 
              general = {info.general}
              setGeneral = {(updatedGeneral) => setInfo({ ...info, general: updatedGeneral})}
            />
            <Experience />
            <Education />
            <Skills />
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
