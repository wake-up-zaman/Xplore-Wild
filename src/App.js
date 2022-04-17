import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Main/Home/Home';
import About from './Pages/About/About';
import CheckOut from './Pages/Private/CheckOut/CheckOut';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Register from './Pages/Authentication/Register/Register';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import Login from './Pages/Authentication/Login/Login';
// import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={
        <RequireAuth>
        <CheckOut></CheckOut>
        </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
