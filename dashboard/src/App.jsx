import './App.css'
import { Dashboard } from './components/Dashboard.jsx/dashboard'
import { Sidebar } from './components/sidebar/sidebar'


function App() {
  

  return (
    <>
    <div className='app-container'>
    <Sidebar />
    <Dashboard />
     </div>
    </>
  )
}

export default App
