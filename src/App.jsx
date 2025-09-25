import './App.css'
import CVDisplay from './components/CVDisplay'
import Education from './components/SideNav/Education'
import Experience from './components/SideNav/Experience'
import GeneralInfo from './components/SideNav/GeneralInfo'
import Projects from './components/SideNav/Projects'
import Skills from './components/SideNav/Skills'
import './App.css'

function App() {

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
            <GeneralInfo />
            <Experience />
            <Projects />
            <Education />
            <Skills />
          </div>
          <div className='col-8'>
            <CVDisplay />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
