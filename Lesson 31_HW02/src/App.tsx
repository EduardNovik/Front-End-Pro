import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Table from './components/Table/Table'
import Form from './components/Form/Form'

function App() {

  const [personalInfo, setPersonalInfo] = useState <any> (null);
  
  return (
    <div className="App">
      <Table personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
      <Form personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
    </div>
  )
}

export default App
