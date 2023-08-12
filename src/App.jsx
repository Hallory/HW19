import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import PostsPage from './pages/posts/PostsPage';
import Photos from './pages/photos/Photos';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navigation'>
          <div className="panel">
          <Link to='/'>Home</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/photos'>Photos</Link>
          <Link to='/contacts'>Contacts</Link>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='posts' element={<PostsPage/>}></Route>
          <Route path='photos' element={<Photos/>}></Route>
          <Route path='contacts' element={<Contacts/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
