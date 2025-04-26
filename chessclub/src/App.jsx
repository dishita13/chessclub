import { useRoutes, useLocation } from 'react-router-dom';
import pawnLogo from '/pawn.svg';
import NavBar from './components/Navigation';
import './App.css';
import ReadPosts from './pages/ReadPosts';
import CreatePost from './pages/CreatePost.jsx';
import EditPost from './pages/EditPost';
import PostPage from './pages/PostPage.jsx';
import AboutClub from './pages/AboutClub.jsx';
import AboutTeam from './pages/AboutTeam.jsx';
function App() {
  const location = useLocation();

  // Define your routes
  let element = useRoutes([
    { path: "/", element: <ReadPosts /> },
    { path: "/post/:id", element: <PostPage /> },
    { path: "/edit/:id", element: <EditPost /> },
    { path: "/post", element: <CreatePost /> },
    {
      path:"/aboutclub",
      element: <AboutClub/>
    },
    {
      path:"/aboutteam",
      element: <AboutTeam/>
    },
  ]);

  return (
    <div className="App">
      <NavBar />

      {location.pathname === '/' && (
        <>
          <div className="logos">
            <a href="https://fremontunified.org/msjhs/" target="_blank">
              <img src={pawnLogo} className="logo" alt="Spinning pawn logo" />
            </a>
          </div>

          <div className='header'>
            <h1>Chess Club</h1>
            <h5>Welcome to our chess community!</h5>
          </div>
        </>
      )}

      {element}
    </div>
  );
}

export default App;

