import pawnLogo from '/pawn.svg'
import NavBar from './components/Navigation'
import './App.css'
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost.jsx'
import EditPost from './pages/EditPost'

function App() {
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts/>
    },
    // {
    //   path:"/edit/:id",
    //   element: <EditPost data={posts} />
    // },
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
        <div className= "logos">
          <a href="https://vite.dev" target="_blank">
            <img src={pawnLogo} className="logo" alt="Pawn logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={pawnLogo} className="logo spinning" alt="Pawn logo" />
          </a>
        </div>
        <div className='header'>
          <h1>Chess Club</h1> 
          <h4>Welcome to our chess community!</h4>
        </div>
        {element}
      </div>
    </>
  )
}

export default App
