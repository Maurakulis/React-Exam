import './styles/App.css'
import Header from './components/UI/Header'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Pages/Register'
import Login from './components/Pages/Login'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
