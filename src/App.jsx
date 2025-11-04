import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { getApps } from './utils/helper'

function App() {

  const CurrentApp = getApps();

  return (
   
    <Router>
      <div className="bg-gray-400 min-h-screen">
      <CurrentApp />
      </div>
    </Router>
    
  )
}

export default App