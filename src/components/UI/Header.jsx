import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>

        <img src="https://marketsplash.com/content/images/2022/06/Paul_Frank-logo-883DB9FC0E-seeklogo.com.png" alt="monke logo" />
        <ul>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/register"><button>Register</button></Link></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header