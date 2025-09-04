import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './Pages/Auth/login';  
import Signup from './Pages/Auth/signup';
import Post from './Pages/Dashboard/posts/postsList';
import User from './Pages/Dashboard/users/user';


function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/post" element={<Post/>}/>
         <Route path="/user" element={<User/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
