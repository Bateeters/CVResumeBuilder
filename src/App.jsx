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
        school: "Ball State",
        location: "Muncie, IN",
        degree: "BFA",
        specialization: "Visual Communication",
        gradDate: "May 2017",
        additional: [
          "3.2 GPA",
          "Minor in Marketing"
        ]
      }
    ],
    experience: [
      {
        company: "VacationPort",
        title: "Junior Web Developer",
        location: "remote",
        startDate: "July 2024",
        endDate: "Present",
        additional: [
          "I do stuff",
          "I do other stuff too",
          "I do too much stuff here..."
        ]
      },
      {
        company: "Amazon",
        title: "Delivery Boy",
        location: "Carmel, IN",
        startDate: "December 2023",
        endDate: "July 2024",
        additional: [
          "This was a rough job...",
          "but it did keep me in shape!",
          "and I suppose it was money."
        ]
      },
      {
        company: "EZAdsPro",
        title: "Senior Graphic Designer",
        location: "Carmel, IN",
        startDate: "December 2023",
        endDate: "July 2024",
        additional: [
        ]
      },
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
