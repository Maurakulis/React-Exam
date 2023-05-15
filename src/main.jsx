import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UsersProvider } from './contexts/UsersContext.jsx'
import { PostsProvider } from './contexts/PostsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostsProvider>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </PostsProvider>

)
