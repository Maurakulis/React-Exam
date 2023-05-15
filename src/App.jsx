import './styles/App.css'
import Header from './components/UI/Header'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Pages/Register'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
