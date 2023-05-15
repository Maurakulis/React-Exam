import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import UsersContext from "../../contexts/UsersContext"

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UsersContext)
  const navigate = useNavigate()

  return (
    <header>
      <nav>

        <img src="https://marketsplash.com/content/images/2022/06/Paul_Frank-logo-883DB9FC0E-seeklogo.com.png" alt="monke logo" />
        <ul>
          {
            !currentUser ?
              <>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/register"><button>Register</button></Link></li>
              </> :
              <>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/">Add new post</Link></li>
                <li><button onClick={() => {
                  setCurrentUser(null)
                  navigate('/register')
                }}>Log Out</button></li>
              </>
          }
        </ul>
      </nav>

    </header>
  )
}

export default Header