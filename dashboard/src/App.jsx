import './App.css'
import { Dashboard } from './components/Dashboard.jsx/dashboard'
import { Sidebar } from './components/sidebar/sidebar'


function App() {
  

  return (
    <>
    <div className='grid gap-4 p-4 grid-cols-[200px_1fr]'>
    <Sidebar />
    <Dashboard />
     </div>
    </>
  )
}

export default App
