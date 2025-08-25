
import './App.css'
import MainLandingPage from './MainLandingPage';
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import ExpenseTracker from './pages/ExpenseTracker';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<ExpenseTracker />} />
      </Routes>
    </Router>
      </>
  )
}

export default App
