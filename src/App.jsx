import './styles/App.css'
import Header from './components/UI/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Register from './components/Pages/Register'
import Login from './components/Pages/Login'
import Footer from './components/UI/Footer'
import Home from './components/Pages/Home'
import { useContext } from 'react'
import UsersContext from './contexts/UsersContext'
import AddNewPost from './components/Pages/AddNewPost'

function App() {
  const { currentUser } = useContext(UsersContext)

  return (
    <>
      <Header />
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={currentUser ? <Home /> : <Navigate to='/register' />} />
        <Route path='newPost' element={currentUser ? <AddNewPost /> : <Navigate to='/register' />}></Route>
        <Route path='*' element={<Navigate to='/register' />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
