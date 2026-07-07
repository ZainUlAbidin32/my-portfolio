import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Portfolio from './pages/Portfolio'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/portfolio' element={<ProtectedRoute><Portfolio/></ProtectedRoute>}/>
    </Routes>
  )
}

export default App
