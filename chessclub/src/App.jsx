import pawnLogo from '/pawn.svg'
import NavBar from './components/Navigation'
import './App.css'
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost.jsx'
import EditPost from './pages/EditPost'

function App() {
  // Set up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts/>
    },
    {
      path:"/edit/:id",
      element: <EditPost />
    },
    {
      path:"/post",
      element: <CreatePost/>
    },
    // {
    //   path:"/aboutclub",
    //   element: <AboutClub/>
    // },
    // {
    //   path:"/aboutteam",
    //   element: <AboutTeam/>
    // }
  ]);
  
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="logos">
        <a href="https://fremontunified.org/msjhs/" target="_blank">
          <img src={pawnLogo} className="logo" alt="Spinning pawn logo" />
        </a>
      </div>

        <div className='header'>
          <h1>Chess Club</h1> 
          <h5>Welcome to our chess community!</h5>
        </div>
        {element}
      </div>
    </>
  )
}

export default App
