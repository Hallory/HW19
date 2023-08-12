import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import PostsPage from './pages/posts/PostsPage';
import Photos from './pages/photos/Photos';
import Contacts from './pages/contacts/Contacts';
import ContactDetails from './components/contacts/contactDetails/ContactDetails';
import { useState } from 'react';
function App() {
  const [contacts, setContacts] = useState([{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
    }, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
    }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
    }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
    }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
    }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956419521",
    gender: "male"
    }])

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
          <Route path='contacts'>
            <Route index element={<Contacts contacts={contacts} />}></Route>
            <Route path='details' element={<ContactDetails />}></Route>
          </Route>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
