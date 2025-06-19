import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/header.jsx';
import MainBody from './components/MainBody/mainBody.jsx';

function App() {

  return (
    <>
      <Header />
      <MainBody />  
    </>
  )
}

export default App
