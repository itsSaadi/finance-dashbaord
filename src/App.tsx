import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import AccountDetails from './pages/AccountDetails'
import { ModeToggle } from './components/mode-toggle'

function App() {

  return (
    <>

      <header className="flex justify-between items-center px-4 py-4 md:px-4 md:py-6">
        <h1 className="text-2xl md:text-3xl md:px-4 font-bold text-gray-800 dark:text-white">
          Finance Dashboard
        </h1>
        <div className='cursor-pointer'>
          <ModeToggle />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account/:id" element={<AccountDetails />} />
      </Routes>
    </>

  )
}

export default App
